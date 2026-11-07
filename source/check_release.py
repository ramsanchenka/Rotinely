"""Read-only readiness check; never deploys or changes confirmation flags."""
import sys
from build import C,ready
required=['operator_name','postal_address','city','country','email_verified','hosting_confirmed','support_provider','support_retention_confirmed','app_store_eula_confirmed','release_matches_reviewed_build']
missing=[k for k in required if not C.get(k)]
if missing:
 print('Review draft. Unconfirmed release facts: '+', '.join(missing));sys.exit(1)
print('Recorded release facts complete. Legal review/provider arrangements and device checks still require human verification; this script is not legal certification.')
