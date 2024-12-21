'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import './InviteList.css';
import { endpoints } from '@/config/api';

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
      const response = await axios.get(endpoints.inviteList);
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

  const renderInviteList = (guestList: Invite[], title: string) => (
    <div className="invite-list-section">
      <h3>{title}</h3>
      {guestList.length === 0 ? (
        <p>No guests in this list.</p>
      ) : (
        <ul>
          {guestList.map((invite) => (
            <li key={invite._id} className={`invite-item ${invite.rsvp ? 'responded' : ''}`}>
              <span className="invite-name">{invite.fullName}</span>
              {invite.possiblePlusOne && (
                <span className="plus-one">+1: {invite.possiblePlusOne}</span>
              )}
              {invite.rsvp && <span className="rsvp-badge">RSVP&apos;d</span>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );

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

  return (
    <div className="invite-list-container">
      <div className="invite-lists">
        {renderInviteList(invites.bride, "Bride's Guests")}
        {renderInviteList(invites.groom, "Groom's Guests")}
      </div>
      <div className="invite-summary">
        <h4>Summary</h4>
        <p>Total Invites: {invites.bride.length + invites.groom.length}</p>
        <p>Bride&apos;s Guests: {invites.bride.length}</p>
        <p>Groom&apos;s Guests: {invites.groom.length}</p>
        <p>RSVPs Received: {
          [...invites.bride, ...invites.groom].filter(invite => invite.rsvp).length
        }</p>
      </div>
    </div>
  );
}