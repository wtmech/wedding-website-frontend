'use client';

import { useState } from 'react';
import axiosInstance from '@/config/api';
import { endpoints } from '@/config/api';
import './RsvpForm.css';
import { Invite, RsvpFormData, RsvpPayload } from './types';

export default function RsvpForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<RsvpFormData>({ fullName: '' });
  const [invite, setInvite] = useState<Invite | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [childCount, setChildCount] = useState(0);

  const handleNameSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (!formData.fullName.trim()) {
        setError('Please enter your full name');
        return;
      }

      const response = await axiosInstance.get(endpoints.inviteSearch(formData.fullName.trim()));

      if (response?.data) {
        if (response.data.rsvp) {
          setError(
            `You have already RSVP'd as ${response.data.rsvp === 'attending' ?
            'attending' : 'not attending'}. If you need to make changes, please contact Billy or Katia directly.`
          );
          return;
        }
        setInvite(response.data);
        setStep(2);
        setError(null);
      } else {
        throw new Error('No data received');
      }
    } catch (err) {
      console.error('Name search error:', err);
      setError('Sorry, we can\'t find your name on the invite list. If you are still having issues, please contact Billy or Katia directly.');
    }
  };

  const handleAttendanceChange = (isAttending: boolean) => {
    setFormData(prev => ({ ...prev, isAttending }));
    if (!isAttending) {
      handleSubmit();
    } else if (invite?.possiblePlusOne) {
      setStep(3);
    } else {
      setStep(5); // Skip plus one questions
    }
  };

  const handlePlusOneChoice = (keepingOriginal: boolean) => {
    setFormData(prev => ({ ...prev, keepingPlusOne: keepingOriginal }));
    if (keepingOriginal) {
      setStep(5);
    } else {
      setStep(4);
    }
  };

  const handleNewPlusOne = (hasNew: boolean) => {
    if (!hasNew) {
      setStep(5);
    } else {
      setStep(4.5); // Show name input
    }
  };

  const handleNewPlusOneName = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(5);
  };

  const handleChildrenChoice = (hasChildren: boolean) => {
    setFormData(prev => ({ ...prev, hasChildren }));
    if (!hasChildren) {
      setStep(7);
    } else {
      setStep(6);
    }
  };

  const handleChildrenNames = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(7);
  };

  const handleDietaryRestrictions = (hasRestrictions: boolean) => {
    setFormData(prev => ({ ...prev, hasDietaryRestrictions: hasRestrictions }));
    if (!hasRestrictions) {
      setStep(8);
    } else {
      setStep(7.5);
    }
  };

  const handleDietaryDetails = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(8);
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
        email: formData.email || undefined,
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
        )?.restriction
      };

      console.log('Submitting RSVP with payload:', payload);

      const response = await axiosInstance.post(endpoints.rsvpSubmit, payload);

      if (response?.data) {
        setError(null);
        setStep(9);
      } else {
        throw new Error('No response data received');
      }
    } catch (err) {
      console.error('RSVP submission error:', err);
      setError(err instanceof Error ? err.message : 'There was an error submitting your RSVP. Please try again.');
    }
  };

  return (
    <div className="rsvp-form">
      {step === 1 && (
        <form onSubmit={handleNameSubmit}>
          <h2>Please Enter Your Full Name</h2>
          <input
            type="text"
            value={formData.fullName}
            onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
            placeholder="Full Name"
            required
          />
          <button type="submit">Continue</button>
          {error && <div className="error-message">{error}</div>}
        </form>
      )}

      {step === 2 && (
        <div className="attendance-choice">
          <h2>Will you be attending the wedding?</h2>
          <div className="button-group">
            <button onClick={() => handleAttendanceChange(true)}>Yes</button>
            <button onClick={() => handleAttendanceChange(false)}>No</button>
          </div>
        </div>
      )}

      {step === 3 && invite?.possiblePlusOne && (
        <div className="plus-one-choice">
          <h2>Will {invite.possiblePlusOne} be joining you?</h2>
          <div className="button-group">
            <button onClick={() => handlePlusOneChoice(true)}>Yes</button>
            <button onClick={() => handlePlusOneChoice(false)}>No</button>
          </div>
        </div>
      )}

      {step === 4 && (
        <div className="new-plus-one">
          <h2>Would you like to bring a different plus one?</h2>
          <div className="button-group">
            <button onClick={() => handleNewPlusOne(true)}>Yes</button>
            <button onClick={() => handleNewPlusOne(false)}>No</button>
          </div>
        </div>
      )}

      {step === 4.5 && (
        <form onSubmit={handleNewPlusOneName}>
          <h2>Please Enter Your Plus One's Full Name</h2>
          <input
            type="text"
            value={formData.newPlusOne || ''}
            onChange={(e) => setFormData(prev => ({ ...prev, newPlusOne: e.target.value }))}
            placeholder="Full Name"
            required
          />
          <button type="submit">Continue</button>
        </form>
      )}

      {step === 5 && (
        <div className="children-choice">
          <h2>Will you be bringing any children?</h2>
          <div className="button-group">
            <button onClick={() => handleChildrenChoice(true)}>Yes</button>
            <button onClick={() => handleChildrenChoice(false)}>No</button>
          </div>
        </div>
      )}

      {step === 6 && (
        <form onSubmit={handleChildrenNames}>
          <h2>Please Enter Your Children's Names</h2>
          <div className="children-inputs">
            <button type="button" onClick={() => setChildCount(prev => prev + 1)}>
              Add Child
            </button>
            {Array.from({ length: childCount }).map((_, index) => (
              <input
                key={index}
                type="text"
                placeholder={`Child ${index + 1} Full Name`}
                onChange={(e) => {
                  const newChildren = [...(formData.children || [])];
                  newChildren[index] = { fullName: e.target.value };
                  setFormData(prev => ({ ...prev, children: newChildren }));
                }}
                required
              />
            ))}
          </div>
          <button type="submit">Continue</button>
        </form>
      )}

      {step === 7 && (
        <div className="dietary-choice">
          <h2>Does anyone in your party have dietary restrictions or prefer not to eat seafood?</h2>
          <p>The menu will be primarily seafood-based. Please let us know if anyone needs an alternative.</p>
          <div className="button-group">
            <button onClick={() => handleDietaryRestrictions(true)}>Yes</button>
            <button onClick={() => handleDietaryRestrictions(false)}>No</button>
          </div>
        </div>
      )}

      {step === 7.5 && (
        <form onSubmit={handleDietaryDetails}>
          <h2>Please Specify Dietary Restrictions</h2>
          {[formData.fullName, formData.newPlusOne, ...(formData.children?.map(c => c.fullName) || [])].map((name, index) => (
            name && (
              <div key={index} className="dietary-input">
                <label>
                  <input
                    type="checkbox"
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
                  <input
                    type="text"
                    placeholder="Enter dietary restrictions or preference for beef"
                    onChange={(e) => {
                      const newRestrictions = [...(formData.dietaryRestrictions || [])];
                      const idx = newRestrictions.findIndex(r => r.guestName === name);
                      if (idx !== -1) newRestrictions[idx].restriction = e.target.value;
                      setFormData(prev => ({ ...prev, dietaryRestrictions: newRestrictions }));
                    }}
                    required
                  />
                )}
              </div>
            )
          ))}
          <button type="submit">Continue</button>
        </form>
      )}

      {step === 8 && (
        <form onSubmit={handleEmailSubmit}>
          <h2>Would you like to provide an email for updates? (Optional)</h2>
          <input
            type="email"
            value={formData.email || ''}
            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
            placeholder="Email Address"
          />
          <button type="submit">Complete RSVP</button>
        </form>
      )}

      {step === 9 && (
        <div className="success-message">
          {formData.isAttending ? (
            <h2>Thank you for your RSVP! We look forward to celebrating with you!</h2>
          ) : (
            <h2>Thank you for letting us know. We&apos;re sorry you won&apos;t be able to join us!</h2>
          )}
        </div>
      )}
    </div>
  );
}