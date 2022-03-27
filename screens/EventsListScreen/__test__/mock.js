import {GET_EVENTS} from '../../../hooks/useEventList';

export const mock_response = [
  {
    request: {
      query: GET_EVENTS,
    },
    result: {
      data: {
        listEvents: {
          items: [
            {
              id: '4eb1be7b-3ecc-4a5f-8599-261f7cf9ab6d',
              title: "Snoop Dogg 'I Wanna Thank Me'",
              descriptionText:
                "The MJR Group presents.... Snoop Dogg 'I Wanna Thank Me' 2020 Tour!",
              logoUrl:
                'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F75005633%2F173443861358%2F1%2Foriginal.20191001-123659?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=fcd80957493451cc0783f729697767ac',
              startDate: '2018-08-01T23:00:00.000Z',
            },
            {
              id: 'd892d780-d4c0-4b5c-9956-3961633810b0',
              title: 'Leeds Careers Fair',
              descriptionText:
                'Are you looking for a Career?  Looking for the right career can often be time-consuming and frustrating',
              logoUrl:
                'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F82141977%2F265949675783%2F1%2Foriginal.20191121-101533?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C300%2C744%2C372&s=dcf8796391a2520c177ac1e28dafa436',
              startDate: '2018-06-02T11:00:00.000Z',
            },
            {
              id: '1ecef83a-38cc-4ead-95b3-9712b3fa4af0',
              title: 'Evolving Design Systems',
              descriptionText:
                "A design system offers a library of visual style, components, and other concerns documented and released by an individual, team or community as code and design tools so that adopting products can be more efficient and cohesive.” -Nathan Curtis, Founder of EightShapes",
              logoUrl:
                'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F43694293%2F200512495655%2F1%2Foriginal.jpg?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=ce2f9f9b42ef9513349a34043ea3001a',
              startDate: '2018-05-12T20:00:00.000Z',
            },
          ],
        },
      },
    },
  },
];


export const mock_error = {
  request: {
    query: GET_EVENTS,
  },
  error: new Error('GET_EVENTS-error'),
};