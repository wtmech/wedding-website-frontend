'use client';

import { useState } from 'react';
import axios from 'axios';
import { endpoints } from '@/config/api';

import './RsvpForm.css';
interface Child {
  name: string;
  age: number;
  dietaryRestrictions: string;
}

export default function RsvpForm() {
  const [step, setStep] = useState<'search' | 'form'>('search');
  const [searchName, setSearchName] = useState('');
  const [searchError, setSearchError] = useState('');

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    attending: true,
    hasPlusOne: false,
    plusOne: {
      fullName: '',
      dietaryRestrictions: ''
    },
    hasChildren: false,
    children: [] as Child[],
    dietaryRestrictions: '',
    additionalNotes: ''
  });

  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<boolean>(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setSearchError('');

    try {
      const response = await axios.get(endpoints.inviteSearch(searchName));
      const invite = response.data;

      if (invite) {
        setFormData(prev => ({
          ...prev,
          fullName: searchName,
          hasPlusOne: Boolean(invite.possiblePlusOne),
          plusOne: {
            ...prev.plusOne,
            fullName: invite.possiblePlusOne || ''
          }
        }));

        setStep('form');
      } else {
        setSearchError('Name not found on the guest list. Please check the spelling or contact the hosts.');
      }
    } catch (err: unknown) {
      setSearchError(err instanceof Error ? err.message : 'Error searching for invitation');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    try {
      await axios.post(endpoints.rsvpSubmit, {
        fullName: formData.fullName,
        email: formData.email,
        attending: formData.attending,
        plusOne: formData.hasPlusOne ? formData.plusOne : undefined,
        children: formData.hasChildren ? formData.children : undefined,
        dietaryRestrictions: formData.dietaryRestrictions,
        additionalNotes: formData.additionalNotes
      });

      setSuccess(true);
      setStep('search');
      setSearchName('');
      setFormData({
        fullName: '',
        email: '',
        attending: true,
        hasPlusOne: false,
        plusOne: { fullName: '', dietaryRestrictions: '' },
        hasChildren: false,
        children: [],
        dietaryRestrictions: '',
        additionalNotes: ''
      });
    } catch (err: Error | unknown) {
      setError(
        err instanceof Error ? err.message : 'An error occurred while submitting'
      );
    }
  };

  const addChild = () => {
    setFormData(prev => ({
      ...prev,
      children: [...prev.children, { name: '', age: 0, dietaryRestrictions: '' }]
    }));
  };

  const removeChild = (index: number) => {
    setFormData(prev => ({
      ...prev,
      children: prev.children.filter((_, i) => i !== index)
    }));
  };

  if (step === 'search') {
    return (
      <div className="rsvp-search">
        <form onSubmit={handleSearch} className="search-form">
          <div className="form-group">
            <label htmlFor="searchName">Please enter your full name as it appears on your invitation:</label>
            <input
              type="text"
              id="searchName"
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
              required
              className="search-input"
            />
          </div>
          {searchError && <div className="error-message">{searchError}</div>}
          <button type="submit" className="search-button">
            Find My Invitation
          </button>
        </form>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rsvp-form">
      {error && <div className="error-message">{error}</div>}
      {success && <div className="success-message">Thank you for your RSVP!</div>}

      <div className="form-group">
        <label htmlFor="fullName">Full Name *</label>
        <input
          type="text"
          id="fullName"
          required
          value={formData.fullName}
          onChange={e => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
          disabled // Name is set from search
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
        />
      </div>

      <div className="form-group">
        <label>
          <input
            type="checkbox"
            checked={formData.attending}
            onChange={e => setFormData(prev => ({ ...prev, attending: e.target.checked }))}
          />
          I&apos;ll be attending
        </label>
      </div>

      {formData.attending && (
        <>
          {formData.hasPlusOne && (
            <div className="plus-one-section">
              <div className="form-group">
                <label htmlFor="plusOneName">Plus One&apos;s Full Name</label>
                <input
                  type="text"
                  id="plusOneName"
                  value={formData.plusOne.fullName}
                  disabled // Plus one name is set from search
                />
              </div>
              <div className="form-group">
                <label htmlFor="plusOneDietary">Plus One&apos;s Dietary Restrictions</label>
                <input
                  type="text"
                  id="plusOneDietary"
                  value={formData.plusOne.dietaryRestrictions}
                  onChange={e => setFormData(prev => ({
                    ...prev,
                    plusOne: { ...prev.plusOne, dietaryRestrictions: e.target.value }
                  }))}
                />
              </div>
            </div>
          )}

          <div className="form-group">
            <label>
              <input
                type="checkbox"
                checked={formData.hasChildren}
                onChange={e => setFormData(prev => ({ ...prev, hasChildren: e.target.checked }))}
              />
              I will bring children (ages 0-5)
            </label>
          </div>

          {formData.hasChildren && (
            <div className="children-section">
              {formData.children.map((child, index) => (
                <div key={index} className="child-entry">
                  <div className="form-group">
                    <label>Child&apos;s Name</label>
                    <input
                      type="text"
                      value={child.name}
                      onChange={e => {
                        const newChildren = [...formData.children];
                        newChildren[index].name = e.target.value;
                        setFormData(prev => ({ ...prev, children: newChildren }));
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label>Age</label>
                    <input
                      type="number"
                      min="0"
                      max="5"
                      value={child.age}
                      onChange={e => {
                        const newChildren = [...formData.children];
                        newChildren[index].age = parseInt(e.target.value);
                        setFormData(prev => ({ ...prev, children: newChildren }));
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label>Dietary Restrictions</label>
                    <input
                      type="text"
                      value={child.dietaryRestrictions}
                      onChange={e => {
                        const newChildren = [...formData.children];
                        newChildren[index].dietaryRestrictions = e.target.value;
                        setFormData(prev => ({ ...prev, children: newChildren }));
                      }}
                    />
                  </div>
                  <button type="button" onClick={() => removeChild(index)} className="remove-child">
                    Remove Child
                  </button>
                </div>
              ))}
              <button type="button" onClick={addChild} className="add-child">
                Add Child
              </button>
            </div>
          )}

          <div className="form-group">
            <label htmlFor="dietaryRestrictions">Dietary Restrictions</label>
            <input
              type="text"
              id="dietaryRestrictions"
              value={formData.dietaryRestrictions}
              onChange={e => setFormData(prev => ({ ...prev, dietaryRestrictions: e.target.value }))}
            />
          </div>
        </>
      )}

      <div className="form-group">
        <label htmlFor="additionalNotes">Additional Notes</label>
        <textarea
          id="additionalNotes"
          value={formData.additionalNotes}
          onChange={e => setFormData(prev => ({ ...prev, additionalNotes: e.target.value }))}
        />
      </div>

      <div className="form-actions">
        <button type="button" onClick={() => setStep('search')} className="back-button">
          Back to Search
        </button>
        <button type="submit" className="submit-button">
          Submit RSVP
        </button>
      </div>
    </form>
  );
}