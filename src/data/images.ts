// Curated Unsplash imagery for Lunaire Events. Direct URLs, sized for web.
const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const images = {
  heroCouple: u('1722805740177-04256b6517f2'), // bride & groom standing in a garden
  // Verified free-licence wedding photos from unsplash.com/s/photos/wedding-image
  heroes: [
    u('1606800052052-a08af7148866'), // floral arch
    u('1519741497674-611481863552'), // couple
    u('1511285560929-80b456fea0bc'), // table setting
    u('1583939003579-730e3918a45a'), // ceremony
  ],
  weddings: [
    u('1519741497674-611481863552'), // romantic couple
    u('1583939003579-730e3918a45a'), // outdoor altar ceremony
    u('1532712938310-34cb3982ef74'), // couple holding hands close-up
    u('1520854221256-17451cc331bf'), // bride laughing
    u('1591604466107-ec97de577aff'), // newlyweds walking in a garden
    u('1583939411023-14783179e581'), // wedding rings
    u('1502635385003-ee1e6a1a742d'), // outdoor ceremony overview
    u('1519225421980-715cb0215aed'), // couple close up portrait
    u('1523438885200-e635ba2c371e'), // floral ceremonial arch setup
    u('1529636798458-92182e662485'), // bride with elegant bouquet
    u('1561593367-66c79c2294e6'), // newlyweds first dance
    u('1649615644623-a4f6220f4352'), // white rose ceremony seating
    u('1714972383523-7c636d2f0e9b'), // couples toast at reception
    u('1522413452208-996ff3f3e740'), // evening wedding ceremony setup
    u('1525441273400-056e9c7517b3'), // grand reception hall overview
    u('1629219219925-ea8de62f2d68'), // luxury floral garden backdrop
  ],
  parties: [
    u('1515934751635-c81c6bc9a2d8'), // celebration toast
    u('1607190074257-dd4b7af0309f'), // outdoor party table setting
    u('1550784718-990c6de52adf'), // cocktail party details
    u('1596457221755-b96bc3a6df18'), // dancing guests
    u('1595407753234-0882f1e77954'), // celebration cake
    u('1621801306185-8c0ccf9c8eb8'), // champagne towers
    u('1429962714451-bb934ecdc4ec'), // sparkler circle celebration
    u('1514525253161-7a46d19cd819'), // lively party crowd
    u('1517263904808-5dc91e3e7044'), // party guests dancing
    u('1517457373958-b7bdd4587205'), // sophisticated bar detail
    u('1524368535928-5b5e00ddc76b'), // dynamic light effects
    u('1531956531700-dc0ee0f1f9a5'), // elegant cocktails setup
    u('1533174072545-7a4b6ad7a6c3'), // guests enjoying drinks
    u('1541532713592-79a0317b6b77'), // gold balloons and confetti
    u('1559060680-36abfac01944'), // party confetti blast
    u('1566737236500-c8ac43014a67'), // dancing under disco lights
    u('1569705460033-cfaa4bf9f822'), // champagne flutes toast
    u('1579457870499-e781952098c6'), // guests holding sparklers
  ],
  decor: [
    u('1465495976277-4387d4b0b4c6'), // rustic floral decor
    u('1511285560929-80b456fea0bc'), // luxury table plates
    u('1606216794079-73f85bbd57d5'), // candelabras and table details
    u('1546032996-6dfacbacbf3f'), // place cards and settings
    u('1606800052052-a08af7148866'), // beautiful ceremony arch
    u('1460978812857-470ed1c77af0'), // pastel table florals
    u('1545232979-8bf68ee9b1af'), // tiered wedding cake
    u('1523521803700-b3bcaeab0150'), // ambient candlelight dinner setting
    u('1524824267900-2fa9cbf7a506'), // luxury plate setting details
    u('1612599542558-f3022089fb38'), // lush roses centerpieces
    u('1648154164366-d067faecdc51'), // white floral plate detail
    u('1723832348105-2e69f948135a'), // luxury wedding dessert table
  ],
  venues: [
    u('1529634597503-139d3726fed5'), // historic garden venue
    u('1583939411023-14783179e581'), // oceanfront setting
    u('1460978812857-470ed1c77af0'), // countryside estate
    u('1532712938310-34cb3982ef74'), // vintage vineyard setting
    u('1607190074257-dd4b7af0309f'), // outdoor lawn reception
    u('1596457221755-b96bc3a6df18'), // dance venue setting
    u('1511795409834-ef04bbd61622'), // high ceiling grand hall
    u('1527529482837-4698179dc6ce'), // twilight outdoor string lights canopy
    u('1587271407850-8d438ca9fdf2'), // long wooden dining tables venue
    u('1618107095181-e3ba0f53ee59'), // modern glasshouse event venue
    u('1647296020388-787fdae78e3c'), // industrial luxury loft event
    u('1714972383570-44ddc9738355'), // grand banquet tent illuminated at night
  ],
  // Clean headshots kept for the team grid (a wedding-scene search has no portraits)
  portraits: [
    u('1494790108377-be9c29b29330', 900),
    u('1438761681033-6461ffad8d80', 900),
    u('1500648767791-00dcc994a43e', 900),
    u('1544005313-94ddf0286df2', 900),
  ],
  details: [
    u('1606216794079-73f85bbd57d5'),
    u('1465495976277-4387d4b0b4c6'),
    u('1546032996-6dfacbacbf3f'),
    u('1511285560929-80b456fea0bc'),
  ],
};

export const allGallery = [
  ...images.weddings.map((src) => ({ src, cat: 'Weddings' })),
  ...images.parties.map((src) => ({ src, cat: 'Parties' })),
  ...images.decor.map((src) => ({ src, cat: 'Decor' })),
  ...images.venues.map((src) => ({ src, cat: 'Venues' })),
];

export type GalleryItem = { src: string; cat: string };
