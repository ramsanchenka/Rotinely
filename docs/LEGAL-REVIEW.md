# Rotinely website and legal review

Reviewed 7 November 2026 against the current local `flowrite` source, not a downloaded App Store binary. This is an implementation and consistency review, not a legal opinion or assurance against lawsuits. Have Polish/EU consumer and privacy counsel review the final terms and translations before launching into Germany and the US.

## Implemented

- Rebuilt the static GitHub Pages site with English at `/`, German at `/de/`, and Polish at `/pl/`. All three have dedicated home, support, privacy, terms and legal notice pages.
- Approved icon and actual refreshed app screenshots. Website-only goal selection, step editor and dark timer are used; example progress is not a customer result. No testimonials, clinical evidence claims or guaranteed benefits.
- Explicit free/Pro split, monthly/annual auto-renewal, conditional trial wording, cancellation and refund links. No hard-coded prices or trial length.
- Removed active-iCloud claims, permanent-uninstall-deletion promises, transaction-anonymity claims and assertions that no data ever leaves the device.
- Described local diagnostic events (200-event window), cumulative milestones and deduplication transaction IDs; sharing is voluntary. System logs and screenshots may contain routine content even though the app's diagnostic export excludes titles.
- Disclosed GitHub Pages technical request data, Private Email support correspondence and Apple purchase/reporting services.
- No website analytics, ad SDKs, cookies, browser storage, external fonts, embedded video or forms added. Language switching uses ordinary links. This does not mean the host keeps no access logs.
- Replaced the previous blanket indemnity, forced arbitration, class-action waiver, US-law-only provision, fixed liability cap and no-refund wording. Preserved mandatory consumer rights; linked Apple's Standard EULA rather than attempting to restate it.
- Included the operator identity and address supplied by the founder: Raman Sanchenka, Stefana Banacha 59A/31, 31-235, Kraków, Poland. The address will be public if deployed.

## Evidence in app code

| Area | Source and observed behavior |
| --- | --- |
| Data storage | `Flowrite/Configuration/DataStack.swift`: SwiftData disk store; `cloudSyncValidated = false`; local PreRelaunchBackup retained for recovery. Old versions and backups must be treated separately. |
| Routine content | `Flowrite/Model/Routine.swift`, `Step.swift`, `RoutineRun.swift`, `ExecutionSession.swift`: names, timings, schedules, history, active session. Deleting a Routine does not demonstrably erase all RoutineRun/history or diagnostic data. |
| Diagnostics | `Flowrite/Utils/PrivacyAnalytics.swift`: local UserDefaults, 200 events, cumulative milestones, local transaction IDs; Settings ShareLink export; no developer upload endpoint found. |
| Purchases | `Flowrite/Store/StoreManager.swift`, `StoreConfig.swift`, `SubscriptionService.swift`: StoreKit monthly/yearly Pro, 3-routine free limit, template/history and feature checks. Eligibility/price comes from Apple. |
| Visible information | `ActivityManager.swift`, `NotificationManager.swift`, `StartRoutineIntent.swift`: names and timing may appear in notifications, ActivityKit, Shortcuts and console logs. No remote ActivityKit push requested. |
| Voice | `RoutineExecutionViewModel.swift`: AVSpeechSynthesizer; no microphone recording found. Foreground limitations disclosed. |
| App links | Settings and paywall currently link to GitHub Pages `/Rotinely/privacy.html` and `/Rotinely/terms.html`. Preserve root legal filenames and verify both old GitHub and custom-domain URLs after deployment. |

## Outstanding release facts — do not silently mark these complete

The generated pages are local review drafts. `source/site.json` controls readiness. While any required confirmation is missing, legal pages have a draft notice and all pages have `noindex,nofollow`. This is a staging safeguard, not deployment prevention. No deployment workflow was added or run.

1. **Mailbox delivery:** founder supplied `support@rotinely.app` and Private Email. Perform an incoming/outgoing delivery test yourself; no email was sent during this task. Confirm `email_verified` only after it works.
2. **Retention operation:** drafted support retention is up to 12 months after resolution, with lawful exceptions. Adopt a deletion routine including attachments, exports and unnecessary copies, or change the copy to a truthful alternative in all languages. Confirm `support_retention_confirmed` only after deciding and implementing this process.
3. **EULA setting:** inspect App Store Connect. The website expects Apple's Standard EULA, unless a different license is expressly shown. If an earlier custom EULA is configured, resolve it before setting `app_store_eula_confirmed`. Do not assume the website changes the App Store contract.
4. **Build match:** compare the actual submitted binary with reviewed behavior, especially iCloud, subscriptions and background notifications. When sync is enabled, revise the policy/claims before release. Set `release_matches_reviewed_build` only after this check.
5. **Provider arrangements:** verify the actual Private Email contracting entity, covered-service DPA/subprocessors, retention and transfer mechanisms for your account. Verify GitHub's relevant hosting/privacy arrangements. Public policies do not prove an account-level agreement exists. Do not promise EU-only storage.
6. **Operator registration:** founder provided personal identity/address, but no business registration, VAT or professional status. Ask counsel whether further Polish provider information, registration/tax IDs or German-targeted information obligations apply. Do not invent identifiers. The legal notice is not certification of DDG/Polish compliance.
7. **EU App Store trader status:** paid app activity may qualify even for an individual. Confirm Apple's DSA trader declaration and required contact verification in App Store Connect. Website imprint does not substitute for Apple's process.
8. **App Store privacy declarations:** review current labels against what the developer actually receives via support, voluntary diagnostics and Apple reporting; on-device processing is different from collection. Do not select labels solely from this website text. Review required-reason API/privacy-manifest requirements for UserDefaults and dependencies before submission.
9. **Consumer terms:** qualified counsel should verify Polish/EU digital-content conformity, withdrawal procedures, notice rules, dispute information and German/Polish translations. The site does not add a paid web checkout. No obsolete EU ODR-platform link was added. A generic disclaimer cannot cure an unsupported treatment claim.
10. **Data controls:** there is no verified in-app erase-all-history/diagnostics/backup action. The policy describes this honestly. Consider adding clear deletion controls and defining a migration-backup lifecycle in a separate app change; do not promise controls before they exist.

After confirmation, edit `source/site.json`, run `python3 source/build.py`, then `python3 source/check_release.py`. Recheck links against actual hosting and manually inspect legal pages. Do not simply remove the draft banner or noindex tag from generated HTML.

## Analytics recommendation

Launch without website tracking. With the current small audience, App Store Connect storefront conversion, subscription reports and distinct Apple campaign links are a useful baseline; they do not measure website traffic or full in-app retention. Maintain US and Germany as primary markets, Poland secondary.

If a clear traffic/CTA question remains later, propose a provider and exact event plan before implementing it. Minimal events would be landing-page views and App Store CTA clicks by site language/campaign; do not include routine content, health inferences, email, fingerprinting or persistent user IDs. “Cookieless” is not automatically GDPR-exempt. Check the provider agreement, data flows, lawful basis and whether consent is needed for its actual implementation, update the notice, and get the founder's decision. No analytics provider or React migration was introduced.

## Primary sources checked

- [Apple App Review Guidelines, privacy and subscriptions](https://developer.apple.com/app-store/review/guidelines/)
- [Apple subscription disclosure guidance](https://developer.apple.com/app-store/subscriptions/)
- [Apple Standard EULA](https://www.apple.com/legal/internet-services/itunes/dev/stdeula/)
- [Apple cancellation guidance](https://support.apple.com/en-us/118428)
- [EU GDPR, including Articles 5, 6, 12–22 and 44 onward](https://eur-lex.europa.eu/eli/reg/2016/679/oj/eng)
- [European Commission: unfair contract terms](https://europa.eu/youreurope/citizens/consumers/unfair-treatment/unfair-contract-terms/index_en.htm)
- [German DDG §5 provider information](https://www.gesetze-im-internet.de/ddg/__5.html) — applicability to this Polish operator requires legal analysis.
- [FTC health-product claims guidance](https://www.ftc.gov/business-guidance/resources/health-products-compliance-guidance)
- [GitHub privacy statement](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement)
- [Namecheap privacy policy](https://www.namecheap.com/legal/general/privacy-policy/), [DPA](https://www.namecheap.com/legal/universal/data-processing-addendum/), [product-specific terms](https://www.namecheap.com/legal/general/details-for-specific-products-services/)
- [Apple EU trader requirements](https://developer.apple.com/help/app-store-connect/manage-compliance-information/manage-european-union-digital-services-act-trader-requirements/)
