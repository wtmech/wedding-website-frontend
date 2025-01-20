'use client';

import { useState } from 'react';
import axiosInstance from '@/config/api';
import { endpoints } from '@/config/api';
import { useTranslation } from '@/hooks/useTranslation';
import './RsvpForm.css';
import { Invite, RsvpFormData, RsvpPayload } from './types';

export default function RsvpForm() {
  const { t } = useTranslation();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<RsvpFormData>({
    fullName: '',
    plusOneDietaryRestrictions: []
  });
  const [invite, setInvite] = useState<Invite | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [childCount, setChildCount] = useState(0);
  const [showDietaryRestrictions] = useState(false);

  const handleNameSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      if (!formData.fullName.trim()) {
        setError(t.rsvp.form.error.emptyName);
        return;
      }

      const response = await axiosInstance.get(endpoints.inviteSearch(formData.fullName.trim()))
        .catch((err) => {
          if (err.code === 'ERR_NETWORK') {
            throw new Error('Unable to connect to the server. Please check your internet connection and try again.');
          }
          throw err;
        });

      if (response?.data) {
        if (response.data.rsvp !== null) {
          setError(t.rsvp.form.error.alreadyRsvped.replace('{status}', response.data.rsvp ? 'attending' : 'not attending'));
          return;
        }
        setInvite(response.data);
        setStep(2);
      } else {
        throw new Error('No data received from server');
      }
    } catch (err) {
      console.error('Name search error:', err);
      setError(t.rsvp.form.error.nameNotFound);
    }
  };

  const handleAttendanceChange = (isAttending: boolean) => {
    setFormData(prev => ({ ...prev, isAttending }));
    if (!isAttending) {
      handleSubmit();
    } else if (invite?.possiblePlusOne) {
      setStep(3);
    } else {
      setStep(4);
    }
  };

  const handlePlusOneChoice = (keepingOriginal: boolean) => {
    setFormData(prev => ({ ...prev, keepingPlusOne: keepingOriginal }));
    if (keepingOriginal) {
      setStep(6);
    } else {
      setStep(4);
    }
  };

  const handleNewPlusOne = (hasNew: boolean) => {
    if (!hasNew) {
      setStep(6);
    } else {
      setStep(5);
    }
  };

  const handleNewPlusOneName = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(6); // Go to children question
  };

  const handleChildrenChoice = (hasChildren: boolean) => {
    setFormData(prev => ({ ...prev, hasChildren }));
    if (!hasChildren) {
      setStep(8);
    } else {
      setStep(7);
    }
  };

  const handleChildrenNames = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(8);
  };

  const handleDietaryRestrictions = (hasRestrictions: boolean) => {
    setFormData(prev => ({ ...prev, hasDietaryRestrictions: hasRestrictions }));
    if (!hasRestrictions) {
      setStep(10);
    } else {
      setStep(9);
    }
  };

  const handleDietaryDetails = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(10);
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSubmit();
  };

  const handleSubmit = async () => {
    try {
      if (!invite?._id) {
        throw new Error('Invalid invite data');
      }

      const payload: RsvpPayload = {
        invitation: invite._id,
        fullName: formData.fullName,
        attending: formData.isAttending || false,
        plusOne: formData.keepingPlusOne || formData.newPlusOne ? {
          fullName: formData.keepingPlusOne ? invite.possiblePlusOne : formData.newPlusOne,
          dietaryRestrictions: formData.dietaryRestrictions?.find(
            d => d.guestName === (formData.keepingPlusOne ? invite.possiblePlusOne : formData.newPlusOne)
          )?.restriction
        } : undefined,
        children: formData.children?.map(child => ({
          name: child.fullName,
          dietaryRestrictions: formData.dietaryRestrictions?.find(
            d => d.guestName === child.fullName
          )?.restriction
        })),
        dietaryRestrictions: formData.dietaryRestrictions?.find(
          d => d.guestName === formData.fullName
        )?.restriction,
        additionalNotes: formData.additionalNotes
      };

      console.log('Submitting RSVP:', payload);
      const response = await axiosInstance.post(endpoints.rsvpSubmit, payload);

      if (response?.data) {
        setError(null);
        setStep(11);
      } else {
        throw new Error('No response data received');
      }
    } catch (err) {
      console.error('RSVP submission error:', err);
      setError(err instanceof Error ? err.message : 'There was an error submitting your RSVP. Please try again.');
    }
  };

  const handleDietaryRestriction = (e: React.ChangeEvent<HTMLInputElement>, option: string) => {
    const newRestrictions = [...(formData.dietaryRestrictions || [])];
    if (e.target.checked) {
      newRestrictions.push({ guestName: formData.fullName, restriction: option });
    } else {
      const idx = newRestrictions.findIndex(r => r.guestName === formData.fullName);
      if (idx !== -1) newRestrictions.splice(idx, 1);
    }
    setFormData(prev => ({ ...prev, dietaryRestrictions: newRestrictions }));
  };

  const handlePlusOneDietaryRestriction = (e: React.ChangeEvent<HTMLInputElement>) => {
    const restrictions = e.target.checked ? ['restriction'] : [];
    setFormData(prev => ({ ...prev, plusOneDietaryRestrictions: restrictions }));
  };

  const handleBackNavigation = () => {
    const currentStep = Number(step);

    switch (currentStep) {
      case 2:  // From attendance question
        setStep(1);
        break;

      case 3:  // From possiblePlusOne question
        setStep(2);
        break;

      case 4:  // From "want a plus one?" question
        if (invite?.possiblePlusOne) {
          setStep(3)
        } else {
          setStep(2);  // Back to attendance
        }
        break;

      case 5:  // From new plus one name input
        setStep(4);
        break;

      case 6:  // From children question
        if (invite?.possiblePlusOne && formData.keepingPlusOne) {
          setStep(3);  // Back to possiblePlusOne question
        } else if (formData.newPlusOne) {
          setStep(5);  // Back to new plus one name input
        } else {
          setStep(4);  // Back to plus one choice
        }
        break;

      case 7:  // From children names
        setStep(6);
        break;

      case 8:  // From dietary restrictions question
        setStep(6);
        break;

      case 9:  // From dietary details
        setStep(8);
        break;

      case 10:  // From email
        setStep(8);
        break;

      default:
        setStep(prev => prev - 1);
    }
  };

  // Helper function for the button group
  const renderButtonGroup = (onSubmit: (e: React.FormEvent) => void, submitText?: string) => (
    <div className="button-group">
      {Number(step) !== 1 && (
        <button
          type="button"
          onClick={handleBackNavigation}
          className="back-button"
        >
          {t.common.back}
        </button>
      )}
      <button type="submit">{submitText || t.common.continue}</button>
    </div>
  );

  return (
    <div className="rsvp-form">
      {Number(step) === 1 && (
        <form onSubmit={handleNameSubmit}>
          <h2>{t.rsvp.form.fullName}</h2>
          <input
            type="text"
            value={formData.fullName}
            onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
            placeholder={t.rsvp.form.fullName}
            required
          />
          {renderButtonGroup(handleNameSubmit, t.rsvp.form.search)}
          {error && <div className="error-message">{error}</div>}
        </form>
      )}

      {Number(step) === 2 && (
        <form onSubmit={(e) => e.preventDefault()}>
          <h2>{t.rsvp.form.attending.question}</h2>
          <div className="button-group">
            {Number(step) !== 1 && (
              <button
                type="button"
                onClick={handleBackNavigation}
                className="back-button"
              >
                {t.common.back}
              </button>
            )}
            <button type="button" onClick={() => handleAttendanceChange(true)}>{t.rsvp.form.attending.yes}</button>
            <button type="button" onClick={() => handleAttendanceChange(false)}>{t.rsvp.form.attending.no}</button>
          </div>
        </form>
      )}

      {Number(step) === 3 && invite && (
        <div className="plus-one-choice">
          <h2>{formData.fullName.toLowerCase() === invite.fullName.toLowerCase() ?
            t.rsvp.form.plusOne.question.replace('{name}', invite.possiblePlusOne || '') :
            t.rsvp.form.plusOne.question.replace('{name}', invite.fullName)
          }</h2>
          <div className="button-group">
            {Number(step) !== 1 && (
              <button
                type="button"
                onClick={handleBackNavigation}
                className="back-button"
              >
                {t.common.back}
              </button>
            )}
            <button type="button" onClick={() => handlePlusOneChoice(true)}>{t.rsvp.form.plusOne.yes}</button>
            <button type="button" onClick={() => handlePlusOneChoice(false)}>{t.rsvp.form.plusOne.no}</button>
          </div>
        </div>
      )}

      {Number(step) === 4 && (
        <div className="plus-one-choice">
          <h2>{t.rsvp.form.plusOne.newQuestion}</h2>
          <div className="button-group">
            {Number(step) !== 1 && (
              <button
                type="button"
                onClick={handleBackNavigation}
                className="back-button"
              >
                {t.common.back}
              </button>
            )}
            <button type="button" onClick={() => handleNewPlusOne(true)}>{t.rsvp.form.plusOne.yes}</button>
            <button type="button" onClick={() => handleNewPlusOne(false)}>{t.rsvp.form.plusOne.no}</button>
          </div>
        </div>
      )}

      {Number(step) === 5 && (
        <form onSubmit={handleNewPlusOneName}>
          <h2>{t.rsvp.form.plusOne.enterName}</h2>
          <input
            type="text"
            value={formData.newPlusOne || ''}
            onChange={(e) => setFormData(prev => ({ ...prev, newPlusOne: e.target.value }))}
            placeholder={t.rsvp.form.plusOne.namePlaceholder}
            required
          />
          {renderButtonGroup(handleNewPlusOneName)}
        </form>
      )}

      {Number(step) === 6 && (
        <div className="children-choice">
          <h2>{t.rsvp.form.children.question}</h2>
          <div className="button-group">
            {Number(step) !== 1 && (
              <button
                type="button"
                onClick={handleBackNavigation}
                className="back-button"
              >
                {t.common.back}
              </button>
            )}
            <button type="button" onClick={() => handleChildrenChoice(true)}>{t.rsvp.form.children.yes}</button>
            <button type="button" onClick={() => handleChildrenChoice(false)}>{t.rsvp.form.children.no}</button>
          </div>
        </div>
      )}

      {Number(step) === 7 && (
        <form onSubmit={handleChildrenNames}>
          <h2>{t.rsvp.form.children.enterNames}</h2>
          <div className="children-inputs">
            <button type="button" onClick={() => setChildCount(prev => prev + 1)}>
              {t.rsvp.form.children.addChild}
            </button>
            {Array.from({ length: childCount }).map((_, index) => (
              <div key={index} className="child-input-row">
                <div className="input-with-x">
                  <input
                    type="text"
                    placeholder={`${t.rsvp.form.children.childPlaceholder} ${index + 1}`}
                    onChange={(e) => {
                      const newChildren = [...(formData.children || [])];
                      newChildren[index] = { fullName: e.target.value };
                      setFormData(prev => ({ ...prev, children: newChildren }));
                    }}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => {
                      setChildCount(prev => prev - 1);
                      const newChildren = [...(formData.children || [])];
                      newChildren.splice(index, 1);
                      setFormData(prev => ({ ...prev, children: newChildren }));
                    }}
                    className="remove-child-button"
                  >
                    ×
                  </button>
                </div>
              </div>
            ))}
          </div>
          {renderButtonGroup(handleChildrenNames)}
        </form>
      )}

      {Number(step) === 8 && (
        <div className="dietary-choice">
          <h2>{t.rsvp.form.dietary.question}</h2>
          <p>{t.rsvp.form.dietary.seafoodNote}</p>
          <div className="button-group">
            {Number(step) !== 1 && (
              <button
                type="button"
                onClick={handleBackNavigation}
                className="back-button"
              >
                {t.common.back}
              </button>
            )}
            <button type="button" onClick={() => handleDietaryRestrictions(true)}>{t.rsvp.form.dietary.yes}</button>
            <button type="button" onClick={() => handleDietaryRestrictions(false)}>{t.rsvp.form.dietary.no}</button>
          </div>
        </div>
      )}

      {Number(step) === 9 && (
        <form onSubmit={handleDietaryDetails}>
          <h2>{t.rsvp.form.dietary.title}</h2>
          <p className="dietary-instructions">
            {t.rsvp.form.dietary.instructions}
          </p>
          {[
            formData.fullName,
            formData.keepingPlusOne ? invite?.possiblePlusOne : formData.newPlusOne,
            ...(formData.children?.map(c => c.fullName) || [])
          ].map((name, index) => (
            name && (
              <div key={index} className="dietary-input">
                <label>
                  <input
                    type="checkbox"
                    checked={formData.dietaryRestrictions?.some(r => r.guestName === name) || false}
                    onChange={(e) => {
                      const newRestrictions = [...(formData.dietaryRestrictions || [])];
                      if (e.target.checked) {
                        newRestrictions.push({ guestName: name, restriction: '' });
                      } else {
                        const idx = newRestrictions.findIndex(r => r.guestName === name);
                        if (idx !== -1) newRestrictions.splice(idx, 1);
                      }
                      setFormData(prev => ({ ...prev, dietaryRestrictions: newRestrictions }));
                    }}
                  />
                  {name}
                </label>
                {formData.dietaryRestrictions?.find(r => r.guestName === name) && (
                  <textarea
                    value={formData.dietaryRestrictions.find(r => r.guestName === name)?.restriction || ''}
                    placeholder={t.rsvp.form.dietary.detailsPlaceholder}
                    onChange={(e) => {
                      const newRestrictions = [...(formData.dietaryRestrictions || [])];
                      const idx = newRestrictions.findIndex(r => r.guestName === name);
                      if (idx !== -1) newRestrictions[idx].restriction = e.target.value;
                      setFormData(prev => ({ ...prev, dietaryRestrictions: newRestrictions }));
                    }}
                    rows={3}
                    required
                    className="dietary-textarea"
                  />
                )}
              </div>
            )
          ))}
          {renderButtonGroup(handleDietaryDetails)}
        </form>
      )}

      {Number(step) === 10 && (
        <form onSubmit={handleEmailSubmit}>
          <h2>{t.rsvp.form.additionalNotes.question}</h2>
          <textarea
            value={formData.additionalNotes || ''}
            onChange={(e) => setFormData(prev => ({ ...prev, additionalNotes: e.target.value }))}
            placeholder={t.rsvp.form.additionalNotes.placeholder}
            rows={4}
            className="dietary-textarea"
          />
          {renderButtonGroup(handleEmailSubmit, t.rsvp.form.submit)}
        </form>
      )}

      {Number(step) === 11 && (
        <div className="success-message">
          <h2>
            {formData.isAttending ?
              t.rsvp.form.success.attending :
              t.rsvp.form.success.notAttending
            }
          </h2>
        </div>
      )}

      {showDietaryRestrictions && (
        <div className="dietary-section">
          <h3>Dietary Restrictions</h3>
          <p className="dietary-note">
            Please only select restrictions for guests who have them
          </p>

          {/* Main guest dietary restrictions */}
          <div className="guest-dietary">
            <span className="guest-name">{formData.fullName}</span>
            <div className="dietary-options">
              <label className="dietary-option">
                <input
                  type="checkbox"
                  checked={formData.dietaryRestrictions?.some(r => r.restriction === 'restriction') || false}
                  onChange={(e) => handleDietaryRestriction(e, 'restriction')}
                />
                <span>Has Dietary Restrictions</span>
              </label>
            </div>
          </div>

          {/* Plus One dietary restrictions */}
          {((formData.keepingPlusOne && invite?.possiblePlusOne) || formData.newPlusOne) && (
            <div className="guest-dietary">
              <span className="guest-name">
                {formData.keepingPlusOne ? invite?.possiblePlusOne : formData.newPlusOne}
              </span>
              <div className="dietary-options">
                <label className="dietary-option">
                  <input
                    type="checkbox"
                    checked={formData.plusOneDietaryRestrictions?.includes('restriction') || false}
                    onChange={(e) => handlePlusOneDietaryRestriction(e)}
                  />
                  <span>Has Dietary Restrictions</span>
                </label>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}