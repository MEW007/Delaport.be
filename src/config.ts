// Centrale instellingen. Pas hier contactgegevens en vlaggen aan — niet in de pagina's zelf.
export const site = {
  name: 'Delaport',
  email: 'info@delaport.be',
  phone: '+32 470 17 35 27',
  phoneHref: 'tel:+32470173527',
  location: 'Perk (Steenokkerzeel)',

  /**
   * Infrastructure-sectie: staat op `false` zolang het belangenconflict (PSA-arbeidscontract)
   * niet formeel is uitgeklaard. Bij `false`: niet gelinkt vanaf de homepage, `noindex`,
   * en niet in de sitemap. Zet op `true` om live te gaan.
   */
  infrastructurePublic: false,

  /** Cloudflare Web Analytics token (Cloudflare dashboard → Analytics → Web Analytics). Leeg = uit. */
  cfAnalyticsToken: '',

  /** Web3Forms access key voor het contactformulier (web3forms.com, gratis). Leeg = formulier valt terug op mailto. */
  web3formsKey: '',
};
