# Mawzun CMS setup

Mawzun is prepared to use the shared Shareef-owned Sanity Studio stored in the
3Ts repository at `cms-studio/`.

Follow `CMS_SETUP.md` in the `3Ts-Inc/3tsinc` repository. For the Mawzun Vercel
project, use:

```text
NEXT_PUBLIC_SANITY_PROJECT_ID=the_project_id_from_sanity
NEXT_PUBLIC_SANITY_DATASET=mawzun
```

Until those variables exist, Mawzun uses the reviewed content and images
checked into this repository. Once connected, publishing the `mawzunSite`
document overrides only populated CMS fields; empty fields retain the checked-in
fallback.
