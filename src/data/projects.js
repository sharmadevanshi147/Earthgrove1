import { sanityClient } from '../lib/sanityClient'

const PROJECTS_QUERY = `*[_type == "project"] | order(order asc) {
  "id": id.current,
  name,
  location,
  category,
  expertiseSlug,
  year,
  siteArea,
  builtUpArea,
  "image": image.asset->url,
  intro,
  body,
  order
}`

/** Fetch all projects from Sanity (returns a Promise) */
export async function fetchProjects() {
  return sanityClient.fetch(PROJECTS_QUERY)
}

/** Fetch a single project by its slug id */
export async function fetchProjectById(id) {
  const results = await sanityClient.fetch(
    `*[_type == "project" && id.current == $id][0] {
      "id": id.current,
      name, location, category, expertiseSlug, year,
      siteArea, builtUpArea, "image": image.asset->url,
      intro, body
    }`,
    { id }
  )
  return results
}

/**
 * Static fallback — used until Sanity data is seeded.
 * Components that don't yet use async fetching still import this.
 */
export const PROJECTS = [
  {
    id: 'nandan-prospera',
    name: 'Nandan Prospera',
    location: 'Ahmedabad, Gujarat',
    category: 'Commercial',
    year: '2022',
    siteArea: '3,20,000 sq ft',
    builtUpArea: '8,50,000 sq ft',
    expertiseSlug: 'commercial',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80',
    intro:
      'A landmark mixed-use development in Ahmedabad that redefines the city skyline — 14 buildings arranged radially, each oriented to the public realm below.',
    body:
      'Nandan Prospera features a cross-section layout with 14 buildings placed radially around a central open space, housing 2 units per floor up to the 5th floor and 10 units on the higher floors. The design combines vertical volume with considered density, allowing all units an offering the building a height that is pleasant and urban, especially when lit from inside.\n\nThe project was conceived as a piece of urban infrastructure as much as a commercial complex — a place that would generate activity on the street at all hours. The ground level is fully permeable, with retail, dining and civic uses threading through the base of each tower. The result is a development that gives back to its city rather than turning away from it.',
  },
  {
    id: 'sri-venkateswara',
    name: 'Sri Venkateswara Mandir',
    location: 'Tirupati, Andhra Pradesh',
    category: 'Temple',
    year: '2021',
    siteArea: '1,20,000 sq ft',
    builtUpArea: '45,000 sq ft',
    expertiseSlug: 'temple',
    image: 'https://images.unsplash.com/photo-1524230572899-a752b3835840?auto=format&fit=crop&w=1200&q=80',
    intro:
      'A traditional temple complex drawing from classical Dravidian architecture, built for a congregation of 12,000 devotees on a hillside site in Tirupati.',
    body:
      "The temple design draws from classical Dravidian proportions — towering gopurams, an enclosed mandapam, and a processional pradakshina path that circumambulates the sanctum. Every element was crafted by hand by artisans who travelled from Tamil Nadu, working directly in stone without templates or CNC fabrication.\n\nThe project required careful attention to site hydrology, as the hillside receives intense monsoon rainfall. A network of hidden drainage channels was designed into the platform, invisible from above but essential to the building's longevity. The sanctum is oriented to receive the first light of the winter solstice sunrise — a tradition carried forward from the original temple that occupied this site three centuries ago.",
  },
  {
    id: 'horizon-school',
    name: 'Horizon International School',
    location: 'Pune, Maharashtra',
    category: 'Institutional',
    year: '2023',
    siteArea: '5,00,000 sq ft',
    builtUpArea: '2,80,000 sq ft',
    expertiseSlug: 'institutional',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=80',
    intro:
      'A K–12 campus in Pune designed around a central learning street, where classrooms, studios, and social spaces open onto a shared indoor-outdoor spine.',
    body:
      'Horizon International School is organised around a naturally ventilated "learning street" — a long, double-height corridor that connects every department and doubles as a gallery, gathering space, and informal learning zone. The street runs north-to-south, maximising cross-ventilation in summer and drawing winter sun deep into the building in the cooler months.\n\nThe design deliberately avoids the corridor-and-classroom typology that characterises most Indian schools. Instead, classrooms open directly onto landscaped courtyards or the central street, making the act of moving through the school a spatial and educational experience in itself. Labs, libraries, and maker-spaces are distributed throughout the campus, rather than concentrated in a single block, to encourage chance encounters between students from different year groups.',
  },
  {
    id: 'amar-coworking',
    name: 'Amar Coworking Space',
    location: 'Bengaluru, Karnataka',
    category: 'Commercial',
    year: '2023',
    siteArea: '28,000 sq ft',
    builtUpArea: '24,000 sq ft',
    expertiseSlug: 'commercial',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80',
    intro:
      'A three-floor coworking environment in central Bengaluru where workstations, cabins, and lounge zones flow into one another without hierarchy.',
    body:
      'The brief for Amar Coworking was simple: a space that felt nothing like an office. The design response was to treat each floor as a distinct landscape — the ground as forest (dense planting, dappled light, informal seating), the first as meadow (open-plan, bright, collaborative), and the second as cliff-edge (private booths, intense focus, views outward).\n\nMaterials were chosen to age gracefully and to contrast with the generic chrome-and-glass that characterises most coworking spaces. Raw concrete ceilings, oiled timber joinery, handmade ceramic tiles, and living moss walls create an environment that feels handmade and particular. Acoustics were a central concern — a combination of mass, absorption, and strategic planning ensures that every zone operates at the right noise level for its intended use.',
  },
  {
    id: 'grove-villas',
    name: 'Grove Villas',
    location: 'Lonavala, Maharashtra',
    category: 'Residential',
    year: '2022',
    siteArea: '2,40,000 sq ft',
    builtUpArea: '96,000 sq ft',
    expertiseSlug: 'residential',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    intro:
      'Eight private villas arranged around a shared garden in the Western Ghats, each oriented to the landscape and designed for multigenerational living.',
    body:
      "The eight villas at Grove are not identical — each has a distinct plan and section, responding to its position within the cluster, its aspect, and the particular view it faces. What unites them is a material palette of local basalt, lime plaster, and reclaimed teak, and a shared grammar of deep verandas and operable timber screens.\n\nThe landscape is the principal architectural element. The garden was designed first — its levels, planting, and water features established before the buildings were finalised. The villas grow out of the garden rather than being placed within it, their ground floors extending into covered outdoor terraces that blur the line between inside and out. Rainwater harvesting and solar panels are integrated unobtrusively, reducing each villa's grid dependence by approximately 70%.",
  },
  {
    id: 'niia-tech-park',
    name: 'Niia Tech Park',
    location: 'Hyderabad, Telangana',
    category: 'Commercial',
    year: '2024',
    siteArea: '8,00,000 sq ft',
    builtUpArea: '42,00,000 sq ft',
    expertiseSlug: 'commercial',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    intro:
      'A next-generation tech campus in Hyderabad planned around landscaped courtyards, where four office towers share a fully public ground level.',
    body:
      'Niia Tech Park departs from the isolated campus model — fenced, private, indifferent to its surroundings — and proposes instead a piece of city. The four towers are connected at ground level by a public realm of gardens, restaurants, a library, and a civic amphitheatre, all accessible to residents of the surrounding neighbourhood.\n\nThe towers themselves are clad in a double-skin facade that dramatically reduces solar gain, eliminating the need for perimeter chilled-beam cooling on the south and west elevations. Each tower has a "sky garden" every 8 floors — a full-height planted atrium open to the exterior that provides fresh air, natural light, and a social gathering point mid-rise. Occupants report these sky gardens as the most-used and most-valued spaces in the building.',
  },
]

/** Keyed lookup for fast access by id */
export const PROJECTS_BY_ID = Object.fromEntries(PROJECTS.map((p) => [p.id, p]))
