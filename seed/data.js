module.exports.seeds = [
  {
    image:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAkFBMVEX33x4AAAD+5R+GeRByZw774x9ZUAv64R7/6B/u1x303B7izBtqYA3y2x0/OQitnBWQghFTSwq4phY4MwfUvxpEPQjm0ByyoRbZxBoqJgVKQwnOuhnBrhh7bw8nIwVPRwpjWQyaixOklBQWFAMeGwSKfRF1ag4LCgFkWgzFsRgiHwQvKwYUEgM8NgemlRSbjROjfARsAAAHC0lEQVR4nO2cW3uiOhRAybYxIFIQEa147c3xVO3//3cH67RHZQcShCaeb6+XeagwWeSe7MRxCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCDmcA7guOD2H5/8A56YThJAnsIhSQgV3g2QW9QfT0X64H00H/SjOPBcss4T1oFtg8FydSu5ODoNXds3LKMoAxC+kXBV4KCQypwNVj4lwiD14soxS1x7HWoYQRFK9E33fmnysYcid5wq/r1d4ltRHfUNIHhUEGXud2aGobQgqGXjiTdhQUjUNhZgrCzK2CixQ1DMUTl9DkLFRz7yiniHXE8wVHeOKWobQ0RRkrHtXhhBqCzI2rxo8tI2GIfdrCDIWGlbUMezWMmS+2X5R3ZDP6gmarorqhvBU09BwOVU2rJ2FOanJXFQ2dEe1BeeBAbEfVA1FSUO6WHXe3rv/SP46TFwTYj+oGkoH3C+f/nGFBlw3DbFJRyQMTzFUDd0pLvgQ/Ex1BfDxy9WflxOzGeioGwYbVPDtcioP6WU2Pluw+KZoyDNU8M+1AA/O8nrlmx6xHVE1jFHD4nCFe9/d5i62IAMdZUNAl5762NAnOf3twbMhAx11Q/RnYyyTvlrd3daa9URFQxcddU/wYjhiHdNdxBmqhgPUEM0nkWTGu4gzbstDvCRalIGOuuEK+1lmS10rQ7WlQZegIkuay1JUDdFl0qWRJGui2uMfsJ+x7R1koqohPv9dePbXRFXDBDVk055V7SaG8hx/hysOrRhdl6E8P5QuYoSO3dmoPMf/lBmyZWbNfi+G8jrNRGrIWDdTi94wgvpam2yl6YvpzLW1PiobAt4j/rA49OwsrBr7FuWGx6d8O2b1l2is6q8rFdlq61hXWDXyMJB0iReMQs+ywqqzuzZWMGTsaZ1a5aizB6y6i/8SpRaVVR1D4SlvsEWBNY5akQq8rNu/4mBLFKZetAls1RUXWzuqo2ZMFOjsk9qxKKwb16aTi2wXW6CoH7k30dnP75ifWulHX3JPJ/RrmppWrBFBK7hObNRTcj8RQ2cP+egiP87GsGK9SHbhzvA9YRTJBs4vUTNW3+Firez4ch/xNMUnvah43AJneJ+GjgBv/aGm2DG43XaD4fHpYKwWKpWZq4q3GebPO5lK9zi8X8Nj9+i/VSuai0+83fBYIZ2wdK2RmWxsmjB0jifZthWDAGMnaBoyPDompRVyZaqYNmb4dSKxxNFYt9+gYe4ImbzziA0V00YNjyf31jJDUwcvGjYsWQQYNJhqrQQ1beiAZEN8Y6giNm/ogGRt3P/fGDqAH64xNDZtw1ASmhLeiSEPvMqX9tBdqs92G1NZHcAD1t5kieGwHT5UptTdYy9tNQpOOImkiOBBh7LEuJM/+V9nVUnFYzWln60B3GS4kZQtjg6Yn/ETlsFpmlQZ64V/tvYMIXhn0oUED12HwEZY3B1/V6/CIYQr8PCitkrpz/ptgn14yXGmbeG3ApK9emLRlgYvGLeSJ+z7iAcaDCo5R1HouiB9v/jBofRaCby3aGXoDd5Z5OsaC7BAm9LN1fCDB4WYr7Bk9QzwybAkKvwWhBhfrGhmqmfuni5+yPkMuallLd3/lMUWNT8uheTqW24Kh3jwLGTd8wxyJ/ggrC/Z/5RNLh6bPmcJQfF6gN3kMlGu5FDh+eiDS28ZWMTIVj13ZRtT1QMFLYQbo0vu4VkQIXdl9+icN6WA9m0njvF6F5JcluFMcoSovqC/lPw/+9iBE8FYupl7nhaRyg2PoTPZ18uOd34B9OKSBbdmJ0/44YG/TDtRFD2U7Dj0L9pJaU5/M5qvPw+H5+i9dBOj23BvGFSkqpSrpU2huP1STtO9oUogoZSrry05P6rHR69ZwZxF7cQURgY3fa6/lA6CasF14l4uKc5CxJ9bBdvYtihtbMpABnciULveS04razQ9+aV4ZSywCsPT64P2esxb2QMWvka4xH9s0a/NU5UAYRmPLc0MtULQvpHegZVW7RDK+ae181+AT/7K6EpfJjzJvRGVvLYYT+PqKo5Kvrbo1Wu7PloNGAK9zvqx9DZHUeuur2XLoXvga7Tz3arDhOBrX4bVfvgld5RvkYuqo5Y5j7Xa1F1xWaEFIFHqGD/UQgg5X6sLRr90SohDXBnW+3pQTgyIg9JkYxf9Yph3XrhKY0H2YU8nMQDZe1XvOA1/+cQFh8nnEh/jjDoZ102McL3tXBqU8NR9nhg4cimA+9tOf3+muRmuOvHEqXf0Q4Dwt9HD8vVKbn5IPGPXXQsOEKT+JJvF8Syb+GmeFH5DWoQA1/FSP5nF43Acb5P8jcL8vewihx8RDd3y+/d1+Qu5FfcGEwRBEARBEARBEHfHv2qXXAHWGtN5AAAAAElFTkSuQmCC',
    name: 'Javascript',
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea laudantium esse officiis necessitatibus est architecto libero suscipit? Sit laborum ipsa magnam sint tempora. Libero doloremque nam ad doloribus enim ratione?',
    video: {
      first: 'https://www.youtube.com/embed/PkZNo7MFNFg',
      second: 'https://www.youtube.com/embed/jS4aFq5-91M',
      third: 'https://www.youtube.com/embed/EfAl9bwzVZk',
      fourth: 'https://www.youtube.com/embed/Qqx_wzMmFeA',
    },
  },
  {
    image:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAACfCAMAAABX0UX9AAAA2FBMVEXydT/lUSnyZyzs39n+8esAAADnVyz5eEH0dj/zaSzlTyXlTCDlUSjyZSjyYR/+9O/s5N/zeEbmY0H5x7jxXRf4qZDfbDrnh3HlRxZcLBgZDAa1Vy9DIBINBgSPRSXuajiCPyLptar2m3vncDzqXzHtYCvol4XrycHRZTbvbjvzf1Ls2dPpqpv0i2V5Ox+bSyc6HQ9jMBq/XDJvNR0wFw1NJRQnEwuuVC3mWzbnfWfma03kNwDqwbbnd170hVz2oof96N783ND4uKHoj3zneV/xWQD70cPon5BV6cuyAAAEfklEQVR4nO3aW1faWBiAYaDmQBIO1TRGMICKB8Q6o7ZTa2urtlP//z+afUpJZAd15iKsWe/TFqTeZL0rO8mX0GgAAAAAAAAAAAAAAAAAAAAAAAD8H3ieZ149w/d//1/+Iyp4o8n5gZ+cT/7wJtp5MpSf1G9ODs4nI/pV8/50nMQ7cZwdzzFORvLF+yReh4nj7JKvmrebOQde4mQq32CQqXyDbNcfDAYyX/aRfNVEvmznYke8eJeXIye7uhw2RjLjbka+54l8gywT/3Y83xs6zki8yb1P/SHfc2Q+uWpFvoY83I3kOUO8OdmHSWbycfatJI99lydDeexr+It8Yh2LvzLf4K+ri4sr+tnJfIk+dTT04lX5hv65Z/KJte1k5LPzPogLF19cuHzUe99E5JuIbuIQKN4+JeZihnx2fpIk4i1JDvxG40C9+fKtYd4Sza97O9eV7/u/Xy0ffK3OLQSwxH2Vurd27UTN16h7a9cO+f4T94XhVGYW71MV+VrLIvItm9pXb/tpvPah2AOndW/t2pna976lfC3y2Yxfka9JvqfyfFFQ0inTi7c5rntr187M1LveLHlbMuvIfBH5lph84VG/pFfyrttqyVP0rO6tXT8m33b/TdFGUW/f5Kt7W9eQvnAJP6/K914s3kgs3rq3df34eu8LblblOxXnDjl31L2xa0iPHZGr89mPfW2x94l8Ud3buobM1JaqfPM9Y6skFtd9MnHd27qGzNSWzlW+L6kWlzB0VMrzHavFG0QVUwf57MzYkX5Vq/c6sOdrM7PZ5fn2ZL7+zap8DB3L8nxnKt9tGirdInHZIq+aI/ItW0xtMt/ekfau6Ju4bmFmq1Ca2qzXfd8Zeavpc21w26+aOuTMJm/Vc9VsY53aSvkacmYjn50eOwK3Ot9YDR2MvFauWr1RaLvfp/N1dT5mNhszdgTbRfuayncX6+ds5LPJH1WGRfqCL76TO999bGY2vqNmoa+bo2ao7hUUp47OWK3dXzEjb7V87Hg8ljaDQr5TefDrbel8zGxW5antppjvvcr30GXkrTYzd6weVb7P4SJfd1/lM8/ZIoYOK3Pm+KHyHRXzfVf5xMzWJl8lk++nynf2JQ0Dma/Tjf9+6OXP2VyGjiqlqa0/39u+TtNuPNvfuuvlz9naEUNHFZNv00xtYuY4Pnu4z2cOMbN1mNlWyB9VFkbeft5O1NtodZjZVpiaoXfet90y6G10eUy5ipnawh9f5/1+KZ9cwL/kzVKGjmomXxSmwe3ZcV8l1O3uH7514i6PKVcaN/PvN0dBml5v783lDau7rf1Z3JXfjGzx5b5VFvnUGThM05vHh9M4Vk/YeEz5nFnzybfroyBcpFP53Iiho8qsuazwmLzdbh3KvuSrsCKfSGdu5pOvSkU+uduZr68xs60wdU2hQr5FOvErceRzuW5ZYTyVjRb5Dgs/R80pZ91nzcZLO6H84I456L3UbOoGhUtAd0q611LrWBzvWLH/1mzKbgcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICX+Qdmmm0aNGisRAAAAABJRU5ErkJggg==',
    name: 'Html',
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea laudantium esse officiis necessitatibus est architecto libero suscipit? Sit laborum ipsa magnam sint tempora. Libero doloremque nam ad doloribus enim ratione?',
    video: {
      first: 'https://www.youtube.com/embed/UB1O30fR-EE',
      second: 'https://www.youtube.com/embed/kMT54MPz9oE',
      third: 'https://www.youtube.com/embed/mJgBOIoGihA',
      fourth: 'https://www.youtube.com/embed/kUMe1FH4CHE',
    },
  },
  {
    image:
      'data:image/jpeg;base64,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',
    name: 'Css',
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea laudantium esse officiis necessitatibus est architecto libero suscipit? Sit laborum ipsa magnam sint tempora. Libero doloremque nam ad doloribus enim ratione?',
    video: {
      first: 'https://www.youtube.com/embed/PkZNo7MFNFg',
      second: 'https://www.youtube.com/embed/jS4aFq5-91M',
      third: 'https://www.youtube.com/embed/EfAl9bwzVZk',
      fourth: 'https://www.youtube.com/embed/Qqx_wzMmFeA',
    },
  },
  {
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdZJMQnNgGgGSlIaq6yUnTTY56fPfyLPnYPQ&usqp=CAU',
    name: 'Python',
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea laudantium esse officiis necessitatibus est architecto libero suscipit? Sit laborum ipsa magnam sint tempora. Libero doloremque nam ad doloribus enim ratione?',
    video: {
      first: 'https://www.youtube.com/embed/PkZNo7MFNFg',
      second: 'https://www.youtube.com/embed/jS4aFq5-91M',
      third: 'https://www.youtube.com/embed/EfAl9bwzVZk',
      fourth: 'https://www.youtube.com/embed/Qqx_wzMmFeA',
    },
  },
  {
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj949IQMWk1FDHksy_JqMTUbM5Xq3yhlWzqw&usqp=CAU',
    name: 'Golang',
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea laudantium esse officiis necessitatibus est architecto libero suscipit? Sit laborum ipsa magnam sint tempora. Libero doloremque nam ad doloribus enim ratione?',
    video: {
      first: 'https://www.youtube.com/embed/PkZNo7MFNFg',
      second: 'https://www.youtube.com/embed/jS4aFq5-91M',
      third: 'https://www.youtube.com/embed/EfAl9bwzVZk',
      fourth: 'https://www.youtube.com/embed/Qqx_wzMmFeA',
    },
  },
  {
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuSkaszcO5wBOsWtvd_lRjka5vxPVVzFqwnw&usqp=CAU',
    name: 'Rust',
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea laudantium esse officiis necessitatibus est architecto libero suscipit? Sit laborum ipsa magnam sint tempora. Libero doloremque nam ad doloribus enim ratione?',
    video: {
      first: 'https://www.youtube.com/embed/PkZNo7MFNFg',
      second: 'https://www.youtube.com/embed/jS4aFq5-91M',
      third: 'https://www.youtube.com/embed/EfAl9bwzVZk',
      fourth: 'https://www.youtube.com/embed/Qqx_wzMmFeA',
    },
  },
];
