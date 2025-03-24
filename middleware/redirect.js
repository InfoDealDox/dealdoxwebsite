export default function (req, res, next) {
  const redirects = {
    "/alternatives/zoho": "/alternative-to-zoho-cpq",
    "/alternatives/oracle": "/alternative-to-oracle-cpq",
    "/blog/deal-dox-s-participation-in-the-leap-2024":
      "/blog/dealdox-participation-in-the-leap-2024",
    "/alternatives/connectwise": "/alternative-to-connectwise-cpq",
    "/alternatives/dealhub": "/alternative-to-dealhub-cpq",
    "/alternatives/sap": "alternative-to-sap-cpq",
    "/glossary/ns": "/glossary",
    "/success-story/accelerating-sales-excellence-with-dealdox-1": "/glossary",
    "/glossary/ns": "/success-story/accelerating-sales-excellence-with-dealdox",
    "/glossary/saa-s-billing": "/glossary/saas-billing",
    "/glossary/request-for-quote-rfq": "/glossary/request-for-quote",
    "/blog/ns": "/blog",
    "/blog/an-overview-of-creating-an-effective-cpq-business-case-1":
      "/blog/cpq-business-case",
    "/blog/an-overview-of-creating-an-effective-cpq-business-case":
      "/blog/cpq-business-case",
      "/subscription":"/pricing",

  };

  const redirectTo = redirects[req.url];

  if (redirectTo) {
    res.writeHead(301, { Location: redirectTo });
    res.end();
  } else {
    next();
  }
}
