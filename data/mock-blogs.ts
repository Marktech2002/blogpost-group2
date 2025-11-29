export interface BlogPost {
  id: string
  title: string
  author: string
  idNumber: string
  date: string
  excerpt: string
  contents: string
  content?: string
  quote: string
  image1: string
  image2: string
  heroImage: string
  categories: string[]
  shares: number
}

export const mockBlogs: BlogPost[] = [
  {
    id: "black-muse-festival",
    title: "Black Muse Festival Kicks Off in Benin City with a New Sculpture Park",
    author: "Ahmed Opeyemi Abdulmukit",
    idNumber: "22D/7HLS/222",
    date: "November 28, 2025",
    excerpt:
      "A stunning 3,500 m² sculpture park opens in Benin City as part of the Black Muse Festival. Featuring a 15-meter bamboo pavilion and interactive installations, it blends ...",
    contents: `Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button detail cotton blend cute functional. Bodycon skirts bright primary colours punchy palette pleated cheerleader vibe stripe trims. Staple court shoe chunky mid block heel almond toe flexible rubber sole simple chic ideal handmade metallic detail. Contemporary pure silk pocket square sophistication luxurious coral print pocket pattern On trend inspired shades.
Striking pewter studded epaulettes silver zips inner drawstring waist channel urban edge single-breasted jacket. Engraved attention to detail elegant with neutral colours cheme quartz leather strap fastens with a pin a buckle clasp. Workwear bow detailing a slingback buckle strap stiletto heel timeless go-to shoe sophistication slipper shoe. Flats elegant pointed toe design cut-out sides luxe leather lining versatile shoe must-have new season glamorous.

Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button detail cotton blend cute functional. Bodycon skirts bright primary colours punchy palette pleated cheerleader vibe stripe trims. Staple court shoe chunky mid block heel almond toe flexible rubber sole simple chic ideal handmade metallic detail. Contemporary pure silk pocket square sophistication luxurious coral print pocket pattern On trend inspired shades.
Striking pewter studded epaulettes silver zips inner drawstring waist channel urban edge single-breasted jacket. Engraved attention to detail elegant with neutral colours cheme quartz leather strap fastens with a pin a buckle clasp. Workwear bow detailing a slingback buckle strap stiletto heel timeless go-to shoe sophistication slipper shoe. Flats elegant pointed toe design cut-out sides luxe leather lining versatile shoe must-have new season glamorous`,
    quote: `Keynotes: Bamboo pavilion by James Inedu‑George\n 3,500 m² sculpture park + green landscaping\n Community engagement: workshops, tours, performances\n Environmental + cultural sustainability\n`,
    content: `Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button detail cotton blend cute functional. Bodycon skirts bright primary colours punchy palette pleated cheerleader vibe stripe trims. Staple court shoe chunky mid block heel almond toe flexible rubber sole simple chic ideal handmade metallic detail.
    
Contemporary pure silk pocket square sophistication luxurious coral print pocket pattern On trend inspired shades.
Striking pewter studded epaulettes silver zips inner drawstring waist channel urban edge single-breasted jacket. Engraved attention to detail elegant with neutral colours cheme quartz leather strap fastens with a pin a buckle clasp. Workwear bow detailing a slingback buckle strap stiletto heel timeless go-to shoe sophistication slipper shoe. Flats elegant pointed toe design cut-out sides luxe leather lining versatile shoe must-have new season glamorous`,
    image1: "/african-art-sculpture-bamboo-structure.jpg",
    image2: "/woven-bamboo-artistic-installation.jpg",
    heroImage: "/bamboo-sculpture-park-benin-city.jpg",
    categories: ["Culture", "Art"],
    shares: 1000,
  },
  {
    id: "mowaa-vision",
    title: "MOWAA's Vision: A Cultural Ecosystem Under Construction",
    author: "SULEIMAN JAMIU ABIOLA",
    idNumber: "22D/7HLS/225",
    date: "November 28, 2025",
    excerpt:
      "Beyond controversy, MOWAA aims to be a full cultural ecosystem. With galleries, a conservation institute, public gardens, and research labs, it merges heritage, ...",
    contents: `Beyond controversy, the Museum of West African Art (MOWAA) represents a bold reimagining of heritage and creativity in Benin City. Designed by Adjaye Associates and MOE+, its 15-acre campus includes exhibition galleries, public gardens, a conservation institute, and research labs.
The MOWAA Institute, opening alongside the museum, aims to be a hub for archaeology, art conservation, and heritage research. Its auditorium, labs, and classrooms are built to nurture talent and preserve memory — not just for display, but for living practice. .

Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button detail cotton blend cute functional. Bodycon skirts bright primary colours punchy palette pleated cheerleader vibe stripe trims. Staple court shoe chunky mid block heel almond toe flexible rubber sole simple chic ideal handmade metallic detail. Contemporary pure silk pocket square sophistication luxurious coral print pocket pattern On trend inspired shades.
Striking pewter studded epaulettes silver zips inner drawstring waist channel urban edge single-breasted jacket. Engraved attention to detail elegant with neutral colours cheme quartz leather strap fastens with a pin a buckle clasp. Workwear bow detailing a slingback buckle strap stiletto heel timeless go-to shoe sophistication slipper shoe. Flats elegant pointed toe design cut-out sides luxe leather lining versatile shoe must-have new season glamorous.`,
    quote: `Keynotes:
15-acre campus: galleries, institute, gardens
Institute for conservation, research, education
2,000+ indigenous trees in public gardens
Nigeria Imaginary: Homecoming exhibit as a central part of vision`,
    content: `In the gardens, more than 2,000 indigenous trees were planted in an effort to reconnect art with nature. The restored greenery underscores MOWAA’s commitment: art should be part of everyday life and collective memory. MOWAA’s opening was intended to launch with Nigeria Imaginary: Homecoming, a major exhibition curated for this moment. The exhibit first shown at Venice Biennale invites critical reflection on stories of nationhood, identity, and reparation\n\n.
    
Though the opening has been postponed due to protests, MOWAA’s long-term ambition remains: to be more than a museum. It strives to be a cultural ecosystem, where research, public engagement, and conservation build a sustainable future for West African art.`,
    image1: "/cultural-center-construction.jpg",
    image2: "/modern-african-museum-architecture.jpg",
    heroImage: "/modern-museum-architecture-africa.jpg",
    categories: ["Culture", "Innovation"],
    shares: 1000,
  },
  {
    id: "controversy-mowaa",
    title: "Controversy as Protests Surround Opening of MOWAA Museum",
    author: "ISIAKA SHERIF OLADIPUPO",
    idNumber: "22D/7HLS/224",
    date: "November 28, 2025",
    excerpt:
      "Protesters interrupt the grand preview of the Museum of West African Art, sparking debate over cultural ownership and the Benin Bronzes. The opening is postponed...",
    contents: `Hope turned to tension in Benin City as protesters stormed the Museum of West African Art (MOWAA) during a preview event in early November 2025. Demonstrators, reportedly aligned with supporters of the Oba of Benin, claimed the museum undermined local cultural authority.

The controversy centers on the Benin Bronzes — priceless artefacts taken during colonial times. Some protesters argue these treasures rightfully belong under the control of the traditional ruler, not a newly built museum. The MOWAA team emphasized their independence and mission to conserve and research, but the tension escalated quickly. `,
    quote: `Keynotes:
Protesters storm MOWAA preview event
Dispute over cultural ownership and the Benin Bronzes
Indefinite postponement of the official opening
High-level involvement from government to mediate.`,
    content: `Following the disruption, the museum announced an indefinite postponement of its public launch, citing safety concerns. The federal government has since stepped in, with a high-level committee set up to navigate the delicate cultural and political divide. 

For many, MOWAA was intended to be a beacon of West African art — with galleries, archives, and a conservation institute as part of its new Benin City campus. But the conflict shows how complicated restitution, heritage, and local authority can be: who really “owns” cultural property?`,
    image1: "/african-art-exhibition.png",
    image2: "/museum-protest-crowd.jpg",
    heroImage: "/museum-protest-cultural-heritage.jpg",
    categories: ["Culture", "Society"],
    shares: 1000,
  },
  {
    id: "cultural-ownership-debate",
    title: "Inside the Debate Over Cultural Ownership at MOWAA",
    author: "SHANGOTOYE BABATUNDE STEPHEN",
    idNumber: "22D/7HLS/227",
    date: "November 28, 2025",
    excerpt:
      "The conflict at MOWAA goes beyond protests — it's a conversation on heritage, authority, and museum identity. Can traditional leadership and contemporary institutions coe...",
    contents: `The standoff around the Museum of West African Art (MOWAA) isn’t just about protests — it’s fundamentally a conversation about heritage, governance, and modern museum identity. On one side are cultural preservationists calling for royal oversight; on the other side, the museum’s leadership insists on independence and a forward-looking mission. 

Built on a design by Adjaye Associates, MOWAA’s campus in Benin City includes not just exhibition halls but gardens, conservation labs, and a vibrant public space.  Its flagship exhibit, Nigeria Imaginary: Homecoming, curated by Aindrea Emelife, aims to challenge dominant narratives and envision Nigeria through multiple, overlapping histories.`,
    quote: `Keynotes:
MOWAA’s modern campus and design by Adjaye Associates
Inaugural exhibition Nigeria Imaginary: Homecoming
Conflict over royal vs institutional control
Museums as spaces of public dialogue, not just preservation`,
    content: `Meanwhile, traditional leaders argue that the museum should be under the stewardship of the Oba of Benin  especially given the history of the Benin Bronzes, which many believe should return to the palace. This dispute highlights a larger question: can modern institutions and traditional authority coexist when it comes to preserving cultural heritage?

Museum leadership emphasizes education, conservation, and public access — not just as a repository, but as a dynamic hub for creative exchange. For them, art isn’t a static relic but a living dialogue between the past and present.`,
    image1: "/museum-gallery-exhibition.jpg",
    image2: "/african-traditional-ceremony.jpg",
    heroImage: "/cultural-debate.png",
    categories: ["Culture", "Society"],
    shares: 1000,
  },
  {
    id: "fela-kuti-legacy",
    title: 'Fela Kuti\'s Legacy Returns to Lagos with "Afrobeat Rebellion" Exhibition',
    author: "ADERIBIGBE NAHEEM OLALEKAN",
    idNumber: "22D/7HLS/226",
    date: "November 28, 2025",
    excerpt:
      "Lagos celebrates Fela Kuti through a multi-room exhibition blending music, activism, and art. Visitors explore archival materials, performances, and interactive ...",
    contents: `Lagos is once again echoing with the rhythms of Afrobeat as the “Fela Anikulapo Kuti: Afrobeat Rebellion” exhibition opened on October 12, 2025, at the Ecobank Pan African Centre. The show marks a homecoming for Fela, blending his musical legacy with his political activism in a deeply immersive way. 

Organized by the Whitespace Creative Arts (AWCA) Foundation, the exhibition was put together in collaboration with the French Embassy in Nigeria and Fela’s family. It reimagines a Paris edition by stretching its scope ten rooms trace Fela’s life from his early years, through Kalakuta Republic, to the iconic Afrika Shrine`,
    quote: `Keynotes:
Multi-room exhibition tracing Fela’s life and activism
“Queens” section celebrating women in Fela’s life
Interactive audio-visual experiences and workshops
Legacy programming: talks, live performance, cinema`,
    content: `The experience combines rare photographs, handwritten lyrics, performance outfits, and reconstructed spaces to bring visitors closer to Fela’s world. A powerful section called the “Queens” spotlights Fela’s dancers and collaborators, telling their stories beyond mere footnotes and acknowledging their agency in his creative journey.

Also on offer: listening booths with his voice and interviews, film screenings, talks, live performances, and even interactive youth workshops. For the curators, this isn’t just nostalgia  it’s a call to action, inspiring a new generation to see art as a tool for resistance and transformation.`,
    image1: "/placeholder-f1tqw.png",
    image2: "/afrobeat-music-exhibition.jpg",
    heroImage: "/fela-kuti.png",
    categories: ["Culture", "Legacy"],
    shares: 1000,
  },
  {
    id: "fela-queens",
    title: "Why Fela's Queens Are Finally Getting Their Spotlight in Lagos",
    author: "ADEKUNLE RIDWAN",
    idNumber: "22D/7HLS/235",
    date: "November 28, 2025",
    excerpt:
      'For the first time, the women who shaped Fela\'s life — his "Queens" — are center stage. Through artifacts and stories, the exhibition highlights their creative agency...',
    contents: `One of the most powerful parts of the “Afrobeat Rebellion” exhibition is its tribute to the women who shaped Fela’s life, the controversial “Queens.” These were not just dancers or partners, but complex figures with agency, creativity, and influence.
     
In the Queens section, visitors encounter portraits, personal artifacts, and stories that challenge simplified narratives of Fela’s life. The exhibition seeks to humanize these women, acknowledging that many lived complicated lives, yet contributed vastly to Fela’s world.`,
    quote: `Keynotes:
Focus on Fela’s women (“Queens”) as creative actors
Personal artifacts and stories
Themes: gender, power, legacy
Educational value for younger and older audiences`,
    content: `The curators are deliberate: this is not glamourization or nostalgia, but a candid exploration of gender, power, and legacy. They highlight how these women negotiated their roles in a patriarchal setting, often balancing survival, performance, and creativity.

For visitors, especially younger audiences, this section is deeply educational. It’s not just about Fela’s rebellion, it’s about the women who rebelled with him, on their own terms. Their stories offer a broader, richer understanding of the Afrobeat era.`,
    image1: "/african-women-dancers-traditional.jpg",
    image2: "/afrobeat-music-exhibition.jpg",
    heroImage: "/fela-kuti-spotlight.png",
    categories: ["Women", "Culture"],
    shares: 1000,
  },
  {
    id: "afrobeat-rebellion-inside",
    title: "Art, Sound, Memory: Inside the Afrobeat Rebellion Exhibition",
    author: "Kpatako Ahmed",
    idNumber: "22D/7HLS/228",
    date: "November 28, 2025",
    excerpt:
      "Step inside Fela's world: immersive soundscapes, reconstructed spaces, and youth workshops bring his activism and music to life. The exhibition invites...",
    contents: `Walking into the “Afrobeat Rebellion” show is like stepping into Fela’s mind: soundscapes swirl, video projections pulse, and the energy of his music fills the air. The exhibition’s immersive design makes you feel like you’re part of his movement, not just observing it.

Visitors can settle into listening booths where Fela’s voice plays his songs, speeches, and interviews loop around — offering an emotional, almost spiritual experience. There are reconstructed rooms: a mock-up of the Kalakuta Republic, the Afrika Shrine, and Fela’s on-stage clothes, making the past feel present.`,
    quote: `Keynotes:
Audio-visual immersion (listening booths, videos)
Reconstructed spaces: Kalakuta Republic, Afrika Shrine
Mixed media: letters, costumes, archives
Youth engagement: interactive workshops for children`,
    content: `But the show isn’t just about him. It’s layered with history, personal struggle, and radical creativity. The design team used mixed media to evoke both loss and liberation archival recordings, personal letters, and contemporary reflections all interweave.
    
There’s also a “Young Rebels’ Corner” where children aged six to fifteen can make protest art, learn about Fela’s politics, and explore their own voice. It’s a clear signal: Fela’s legacy isn’t frozen in time it’s meant to spark the next generation.`,
    image1: "/afrobeat-music-exhibition.jpg",
    image2: "/african-art-exhibition.png",
    heroImage: "/seun-kuti.png",
    categories: ["Women", "Culture"],
    shares: 1000,
  },
]
