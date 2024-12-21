'use client';

import { useState, useEffect } from 'react';
import axiosInstance from '@/config/api';
import { endpoints } from '@/config/api';
import Accordion from '@/components/base/accordion/Accordion';
import './InviteList.css';

interface Invite {
  _id: string;
  fullName: string;
  possiblePlusOne?: string;
  guestOf: 'bride' | 'groom';
  rsvp: string | null;
}

export default function InviteList() {
  const [invites, setInvites] = useState<{ bride: Invite[], groom: Invite[] }>({
    bride: [],
    groom: []
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchInvites();
  }, []);

  const fetchInvites = async () => {
    try {
      const response = await axiosInstance.get(endpoints.inviteList);
      const allInvites = response.data;

      const separatedInvites = {
        bride: allInvites.filter((invite: Invite) => invite.guestOf === 'bride'),
        groom: allInvites.filter((invite: Invite) => invite.guestOf === 'groom')
      };

      setInvites(separatedInvites);
      setError(null);
    } catch (err: Error | unknown) {
      console.error('Error details:', err);
      setError(
        err instanceof Error ? err.message : 'Failed to fetch invites'
      );
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <div className="error-message">
          <h3>Error Loading Invites</h3>
          <p>{error}</p>
          <button
            onClick={() => {
              setError(null);
              setIsLoading(true);
              fetchInvites();
            }}
            className="retry-button"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  const totalGuests = invites.bride.length + invites.groom.length;
  const confirmedGuests = [...invites.bride, ...invites.groom]
    .filter(invite => invite.rsvp).length;
  const pendingGuests = totalGuests - confirmedGuests;

  return (
    <div className="invite-container">
      {/* Summary Section */}
      <div className="summary-section">
        <h2>Guest List Summary</h2>
        <div className="summary-grid">
          <div className="summary-card">
            <p className="summary-number">{totalGuests}</p>
            <p className="summary-label">Total Guests</p>
          </div>
          <div className="summary-card confirmed">
            <p className="summary-number">{confirmedGuests}</p>
            <p className="summary-label">Confirmed</p>
          </div>
          <div className="summary-card pending">
            <p className="summary-number">{pendingGuests}</p>
            <p className="summary-label">Pending</p>
          </div>
        </div>
      </div>

      {/* Guest Lists */}
      <Accordion title={`Groom's Guests (${invites.groom.length})`}>
        <div className="guest-list">
          {invites.groom.map((invite) => (
            <div key={invite._id} className="guest-item">
              <div className="guest-info">
                <span className="guest-name">{invite.fullName}</span>
                {invite.possiblePlusOne && (
                  <span className="plus-one">
                    +1: {invite.possiblePlusOne}
                  </span>
                )}
              </div>
              <span className={`status-badge ${invite.rsvp ? 'confirmed' : 'pending'}`}>
                {invite.rsvp ? 'Confirmed' : 'Pending'}
              </span>
            </div>
          ))}
        </div>
      </Accordion>

      <Accordion title={`Bride's Guests (${invites.bride.length})`}>
        <div className="guest-list">
          {invites.bride.map((invite) => (
            <div key={invite._id} className="guest-item">
              <div className="guest-info">
                <span className="guest-name">{invite.fullName}</span>
                {invite.possiblePlusOne && (
                  <span className="plus-one">
                    +1: {invite.possiblePlusOne}
                  </span>
                )}
              </div>
              <span className={`status-badge ${invite.rsvp ? 'confirmed' : 'pending'}`}>
                {invite.rsvp ? 'Confirmed' : 'Pending'}
              </span>
            </div>
          ))}
        </div>
      </Accordion>
    </div>
  );
}