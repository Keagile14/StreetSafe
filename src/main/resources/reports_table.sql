CREATE TABLE reports(
    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    crime_type TEXT NOT NULL,
    description TEXT NOT NULL,
    location TEXT NOT NULL,
    is_anonymous INTEGER NOT NULL DEFAULT 0, --0 = NO, 1 = YES
    status TEXT NOT NULL DEFAULT 'Open' CHECK(status IN ('Open','Closed')),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);