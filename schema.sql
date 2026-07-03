-- D1 database schema for Illustrate Words Sponsor Ad System

-- 1. Sponsors Table Definition
CREATE TABLE IF NOT EXISTS sponsors (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    slot_number INTEGER NOT NULL UNIQUE,
    name TEXT NOT NULL,
    logo_url TEXT NOT NULL,
    website_url TEXT NOT NULL,
    tagline TEXT NOT NULL,
    email TEXT NOT NULL,
    stripe_subscription_id TEXT,
    stripe_customer_id TEXT,
    active INTEGER NOT NULL DEFAULT 0,
    paid_until TEXT,
    created_at TEXT DEFAULT CURRENT_TIMESTAMP,
    updated_at TEXT DEFAULT CURRENT_TIMESTAMP
);

-- Idempotency table for webhook event tracking
CREATE TABLE IF NOT EXISTS events_processed (
    id TEXT PRIMARY KEY,
    processed_at TEXT DEFAULT CURRENT_TIMESTAMP
);

-- 2. Performance & Lookup Indexes
CREATE INDEX IF NOT EXISTS idx_sponsors_active ON sponsors(active);
CREATE INDEX IF NOT EXISTS idx_sponsors_slot ON sponsors(slot_number);

-- 3. Seed 20 Available Slots (Range 1-20)
INSERT OR IGNORE INTO sponsors (slot_number, name, logo_url, website_url, tagline, email, active) VALUES
(1, 'Available', '', '', 'Your ad here', 'sponsors@illustratewords.com', 0),
(2, 'Available', '', '', 'Your ad here', 'sponsors@illustratewords.com', 0),
(3, 'Available', '', '', 'Your ad here', 'sponsors@illustratewords.com', 0),
(4, 'Available', '', '', 'Your ad here', 'sponsors@illustratewords.com', 0),
(5, 'Available', '', '', 'Your ad here', 'sponsors@illustratewords.com', 0),
(6, 'Available', '', '', 'Your ad here', 'sponsors@illustratewords.com', 0),
(7, 'Available', '', '', 'Your ad here', 'sponsors@illustratewords.com', 0),
(8, 'Available', '', '', 'Your ad here', 'sponsors@illustratewords.com', 0),
(9, 'Available', '', '', 'Your ad here', 'sponsors@illustratewords.com', 0),
(10, 'Available', '', '', 'Your ad here', 'sponsors@illustratewords.com', 0),
(11, 'Available', '', '', 'Your ad here', 'sponsors@illustratewords.com', 0),
(12, 'Available', '', '', 'Your ad here', 'sponsors@illustratewords.com', 0),
(13, 'Available', '', '', 'Your ad here', 'sponsors@illustratewords.com', 0),
(14, 'Available', '', '', 'Your ad here', 'sponsors@illustratewords.com', 0),
(15, 'Available', '', '', 'Your ad here', 'sponsors@illustratewords.com', 0),
(16, 'Available', '', '', 'Your ad here', 'sponsors@illustratewords.com', 0),
(17, 'Available', '', '', 'Your ad here', 'sponsors@illustratewords.com', 0),
(18, 'Available', '', '', 'Your ad here', 'sponsors@illustratewords.com', 0),
(19, 'Available', '', '', 'Your ad here', 'sponsors@illustratewords.com', 0),
(20, 'Available', '', '', 'Your ad here', 'sponsors@illustratewords.com', 0);
