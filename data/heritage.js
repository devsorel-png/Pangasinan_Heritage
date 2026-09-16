// Single content source for the whole site. Every page, card, and section
// reads from here — updating a fact or adding a timeline entry never
// requires touching a component.

export const lighthouse = {
  name: 'Cape Bolinao Lighthouse',
  shortName: 'Bolinao Lighthouse',
  location: 'Patar, Bolinao, Pangasinan',
  tagline: 'A Spanish-era lighthouse still guiding ships along the West Philippine Sea',
  description:
    'One of the tallest lighthouses in the Philippines, standing on a cliff above Patar Beach since 1905, still an active aid to navigation over a century later.'
}

export const quickFacts = [
  { number: '1905', label: 'Year completed' },
  { number: '~15', label: 'Storeys of climbable tower' },
  { number: '3', label: 'Colonial-era Philippine lighthouses of this scale' },
  { number: '25 nmi', label: 'Approx. light visibility range' }
]

export const timeline = [
  {
    year: '1897',
    title: 'Construction begins',
    body: 'Spanish colonial engineers select Punta Piedra Point, a cliff above what is now Patar Beach, to mark a historically dangerous stretch of coast for ships entering the West Philippine Sea.'
  },
  {
    year: '1905',
    title: 'The light is lit',
    body: 'Construction finishes under American administration and the lighthouse enters service, joining a chain of lighthouses built to modernize Philippine coastal navigation.'
  },
  {
    year: '1940s',
    title: 'Wartime years',
    body: 'Like much of the Philippine coast, the area sees military activity during the Second World War; the structure survives largely intact.'
  },
  {
    year: 'Today',
    title: 'Still an active aid to navigation',
    body: 'The lighthouse remains functional and open to visitors, now one of Bolinao\u2019s most recognizable landmarks alongside Patar Beach below it.'
  }
]

export const galleryModes = [
  {
    mode: 'dawn',
    title: 'Dawn',
    caption: 'Soft light over the cliff, before the day\u2019s first boats head out.'
  },
  {
    mode: 'day',
    title: 'Midday',
    caption: 'Clear views across the West Philippine Sea from the lighthouse grounds.'
  },
  {
    mode: 'dusk',
    title: 'Dusk',
    caption: 'The lamp comes on as the sky turns \u2014 the best-known photo spot in Bolinao.'
  },
  {
    mode: 'night',
    title: 'Night',
    caption: 'The beam sweeps the coastline, still doing the job it was built for in 1905.'
  },
  {
    mode: 'storm',
    title: 'Storm weather',
    caption: 'The light stays on through rough weather \u2014 its original purpose.'
  }
]

export const faqs = [
  {
    question: 'How do I get to Cape Bolinao Lighthouse?',
    answer:
      'The lighthouse sits above Patar Beach in Bolinao, Pangasinan, reachable by tricycle or private vehicle from the Bolinao town proper, roughly a 15\u201320 minute ride. Many visitors combine the trip with Patar Beach, a short walk downhill.'
  },
  {
    question: 'Is there an entrance fee?',
    answer:
      'Local tourism offices typically collect a small entrance or environmental fee at the site. Rates can change, so it\u2019s worth checking with the Bolinao or Pangasinan tourism office before your visit.'
  },
  {
    question: 'What\u2019s the best time to visit?',
    answer:
      'Late afternoon is the classic choice, timed for sunset over the West Philippine Sea. Mornings are quieter and cooler if you\u2019d rather avoid the crowds.'
  },
  {
    question: 'Can I go inside the tower?',
    answer:
      'Access to the tower interior has varied over the years and may be limited for preservation or safety reasons. Confirm current access with the local tourism office rather than assuming the tower is open.'
  }
]

export const nearby = [
  {
    name: 'Patar White Beach',
    note: 'A ten-minute walk downhill from the lighthouse grounds.'
  },
  {
    name: 'Bolinao town proper',
    note: 'Home to St. James the Great Parish Church and local eateries.'
  }
]
