-- Record of Terms of Service acceptance. Not a public table.

create table if not exists terms_acceptances (
  id text primary key,
  version text not null,
  accepted_at timestamptz not null default now(),
  context text not null,
  user_id text
);

create index if not exists terms_acceptances_accepted_idx on terms_acceptances (accepted_at desc);
