# Production Hosting

Configured on 2026-10-21. The React/Vite website is hosted on Sites; GoDaddy
manages the domain's DNS. TradeIndia account access is not required.

- Production: https://shivaenterprises.co
- Also connected: https://www.shivaenterprises.co
- Hosting URL: https://shiva-enterprises.tinycake512.chatgpt.site
- Sites project ID: `appgprj_6ad8dc3a4ca88191bce55de54f132cb0`
- Managed source checkout: `.sites-deployment/shiva-enterprises`
- Hosting configuration: `.sites-deployment/shiva-enterprises/.openai/hosting.json`
- Published source commit: `7934de7691e35aa5cf2a1b167e4963646e9b560b`

Reuse the existing Sites project for future deployments. GitHub pushes alone do
not publish this site: update the managed source checkout, build, push its exact
source state, save a Sites version, then deploy that version.

## DNS

GoDaddy nameservers: `ns31.domaincontrol.com`, `ns32.domaincontrol.com`.
Previous broken nameservers: `server1.trade-india.com`, `server2.trade-india.com`.

| Type | Name | Value |
| --- | --- | --- |
| A | @ | 162.159.143.30 |
| A | @ | 172.66.3.26 |
| CNAME | www | custom-domains.chatgpt.site. |
| TXT | _openai-site-verification | openai-site-verification=t96RPpnqmHhoQK0igEiLQbzQctm3IeqeS8bEPgREER4 |
| TXT | _openai-site-verification.www | openai-site-verification=VswfOcYts_p4JDek3plYgF5xIyyHHFJpj97cC9uKnsU |
| TXT | _cf-custom-hostname | a6b69e9c-201e-482f-a6d5-0336a41eec6d |
| TXT | _cf-custom-hostname.www | b9bdf9b2-d4b9-4d98-b7b2-a3ef14b3ffbe |

Both custom domains and their SSL certificates were confirmed active. Existing
GoDaddy `_domainconnect` and `_dmarc` records were left unchanged. No MX records
were present in the new GoDaddy zone, and GoDaddy displayed zero email accounts.
Whether email previously existed at TradeIndia is unknown; if domain email is
used, obtain its provider's MX/SPF/DKIM records and restore them without replacing
the website records above.

## Verification

- Production build and local image-reference audit passed.
- Public hosting URL, apex homepage, and www product route loaded in Brave.
- Direct product-route refresh and mobile quote-page layout were checked.
- Google Ads tag and existing enquiry-click conversion tracking remain in code.
- Ad approval is separate: request a destination re-review in Google Ads once
  DNS has propagated. Successful website loading does not guarantee ad approval.
