import { Article } from '../../../interfaces/article.interface';

export const RXJS_COLD_VS_HOT_OBSERVABLE_ARTICLE: Article[] = [
  {
    title: 'Hot vs cold observables',
    description: [
      'There are two types of observables: hot and cold. The main difference is that a cold observable creates a data producer for each subscriber, whereas a hot observable creates a data producer first, and each subscriber gets the data from one producer, starting from the moment of subscription.',
      'Let’s compare watching a movie on Netflix to going into a movie theater. Think of yourself as an observer. Anyone who decides to watch Mission: Impossible on Netflix will get the entire movie, regardless of when they hit the play button. Netflix creates a new producer to stream a movie just for you. This is a cold observable.',
      'If you go to a movie theater and the showtime is 4 p.m., the producer is created at 4 p.m., and the streaming begins. If some people (subscribers) are late to the show, they miss the beginning of the movie and can only watch it starting from the moment of arrival. This is a hot observable.',
      'A cold observable starts producing data when some code invokes a subscribe() function on it. For example, your app may declare an observable providing a URL on the server to get certain products. The request will be made only when you subscribe to it. If another script makes the same request to the server, it’ll get the same set of data.',
      'A hot observable produces data even if no subscribers are interested in the data. For example, an accelerometer in your smartphone produces data about the position of your device, even if no app subscribes to this data. A server can produce the latest stock prices even if no user is interested in this stock.',
    ],
  },
  {
    title: 'Another eplanation:',
    description: [
      'Hot observables are ones that are pushing event when you are not subscribed to the observable. Like mouse moves, or Timer ticks or anything like that. Cold observables are ones that start pushing only when you subscribe, and they start over if you subscribe again.',
    ],
  },
];
