'use client';

import { useState, useEffect } from 'react';
import axiosInstance from '@/config/api';
import { endpoints } from '@/config/api';
import Accordion from '@/components/base/accordion/Accordion';
import './InviteList.css';

interface Rsvp {
  _id: string;
  fullName: string;
  attending: boolean;
  plusOne?: {
    fullName: string;
    attending?: boolean;
    dietaryRestrictions?: string;
  };
  children?: Array<{
    name: string;
    age?: number;
    dietaryRestrictions?: string;
  }>;
  dietaryRestrictions?: string;
  additionalNotes?: string;
  respondedAt: Date | string;
  isMainInvitee: boolean;
}

interface Invite {
  _id: string;
  fullName: string;
  possiblePlusOne?: string;
  guestOf: 'bride' | 'groom';
  rsvp: Rsvp | null;
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

  const formatDate = (date: Date | string) => {
    try {
      const dateObj = typeof date === 'string' ? new Date(date) : date;
      if (isNaN(dateObj.getTime())) {
        return 'Invalid Date';
      }
      return dateObj.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch (error) {
      console.error('Error formatting date:', error);
      return 'Invalid Date';
    }
  };

  const renderRsvpDetails = (rsvp: Rsvp) => {
    return (
      <div className="rsvp-details">
        <div className="rsvp-status">
          <span className={`status-icon ${rsvp.attending ? 'attending' : 'not-attending'}`}>
            {rsvp.attending ? '✓' : '✗'}
          </span>
          <span className="status-text">
            {rsvp.attending ? 'Attending' : 'Not Attending'}
          </span>
        </div>

        {rsvp.plusOne && (
          <div className="rsvp-plus-one">
            <h4>Plus One</h4>
            <p>{rsvp.plusOne.fullName}</p>
            {rsvp.plusOne.dietaryRestrictions && (
              <p className="dietary">Dietary: {rsvp.plusOne.dietaryRestrictions}</p>
            )}
          </div>
        )}

        {rsvp.children && rsvp.children.length > 0 && (
          <div className="rsvp-children">
            <h4>Children</h4>
            {rsvp.children.map((child, index) => (
              <div key={index} className="child-details">
                <p>{child.name}</p>
                {child.dietaryRestrictions && (
                  <p className="dietary">Dietary: {child.dietaryRestrictions}</p>
                )}
              </div>
            ))}
          </div>
        )}

        {rsvp.dietaryRestrictions && (
          <div className="rsvp-dietary">
            <h4>Dietary Restrictions</h4>
            <p>{rsvp.dietaryRestrictions}</p>
          </div>
        )}

        {rsvp.additionalNotes && (
          <div className="rsvp-notes">
            <h4>Additional Notes</h4>
            <p>{rsvp.additionalNotes}</p>
          </div>
        )}

        <div className="rsvp-date">
          <p>Responded: {formatDate(rsvp.respondedAt)}</p>
        </div>
      </div>
    );
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
                <span className="guest-name">
                  {invite.rsvp ? invite.rsvp.fullName : invite.fullName}
                </span>
                {invite.possiblePlusOne && (
                  <span className="plus-one">
                    Possible +1: {invite.rsvp && invite.rsvp.plusOne ?
                      invite.rsvp.plusOne.fullName :
                      invite.possiblePlusOne}
                  </span>
                )}
                {invite.rsvp && renderRsvpDetails(invite.rsvp)}
              </div>
              {!invite.rsvp && (
                <span className="status-badge pending">Pending</span>
              )}
            </div>
          ))}
        </div>
      </Accordion>

      <Accordion title={`Bride's Guests (${invites.bride.length})`}>
        <div className="guest-list">
          {invites.bride.map((invite) => (
            <div key={invite._id} className="guest-item">
              <div className="guest-info">
                <span className="guest-name">
                  {invite.rsvp ? invite.rsvp.fullName : invite.fullName}
                </span>
                {invite.possiblePlusOne && (
                  <span className="plus-one">
                    Possible +1: {invite.rsvp && invite.rsvp.plusOne ?
                      invite.rsvp.plusOne.fullName :
                      invite.possiblePlusOne}
                  </span>
                )}
                {invite.rsvp && renderRsvpDetails(invite.rsvp)}
              </div>
              {!invite.rsvp && (
                <span className="status-badge pending">Pending</span>
              )}
            </div>
          ))}
        </div>
      </Accordion>
    </div>
  );
}