

const video = [{
  iframe: 'https://www.youtube.com/embed/0pWsCiBvLOk?si=vVVe68gTUI1monZ9',
  time: '2:39',
  profile: 'https://yt3.ggpht.com/bnt--q2Z0wyH0NZBKUYaDrmFmruomYCvn2ev5bvBbx5D0JOxovcT9n9iNimt-y_GovvHaJbrQFc=s48-c-k-c0x00ffffff-no-rj',
    stat: {
      title: 'Shubh - One Love (Official Audio)',
      author: 'SHUBH',
      views: '198,350,033 views Aug 18, 2023'
    }
}, {
  iframe: 'https://www.youtube.com/embed/wCGbpXhGflk?si=Xac4iqyWCfZ1Spa-',
  time: '3:05',
  profile: 'src="https://yt3.ggpht.com/fBQVhvloOOpgThfLC1wafSINQOcZbpv3QATTY0yAI0CJ-lJR84tbguLbP53PVawjKacKkHYfybY=s48-c-k-c0x00ffffff-no-rj"',
    stat: {
      title: 'Tere Bharose Shyam Dhani | तेरे भरोसे श्याम धनी (Official Video) Vishu Puthi | Khatu Shyam New Song',
      author: 'Venga Haryanvi',
      views: '5,134,624 views  Mar 1, 2024'
    }
}, {
  iframe: 'https://www.youtube.com/embed/a4pi2zKbf8Q?si=QZfGdSFGMh4wbobO',
  time: '5:08',
  profile: 'https://yt3.ggpht.com/ytc/AIdro_naFeRS5iTH2wIqJG4USJV_vJjLh2tOCyXV1H_X-DYIkg=s48-c-k-c0x00ffffff-no-rj',
    stat: {
      title: 'Kaka WRLD - Bholenath (A Love Story) | Official Video | Arvindr Khaira | Main Bhola Parvat Ka',
      author: 'Pellet Drum Productions',
      views: '284,843,217 views  Nov 11, 2020'
    }
}, {
  iframe: 'https://www.youtube.com/embed/Xukxjs9VYiI?si=4-D1BOTbeZL2cfxj',
  time: '4:08',
  profile: 'https://yt3.ggpht.com/szYQwddyXx-XcOXwmShVo35RNXNAAB1Og6XXPe7NPGwWOgUU3leNWXZmKY4dWAA2xgkMatoNvws=s48-c-k-c0x00ffffff-no-rj',
    stat: {
      title: 'Aditya Rikhari - NASAMAJH',
      author: 'Aditya Rikhari',
      views: '10,076,331 views  Jul 28, 2022'
    }
}, {
  iframe: 'https://www.youtube.com/embed/sOoQH5z7BT8?si=_YLMAzgY--gpmtp5',
  time: '5:02',
  profile: 'https://yt3.ggpht.com/ytc/AIdro_lTIClTxbIfXAJHtzwqInxzY5h7PnvI9thZffyXeoa6xsA=s48-c-k-c0x00ffffff-no-rj',
    stat: {
      title: "Ik Supna | Amber Vashisht | Latest Punjabi Songs 2016 | Speed Records",
      author: 'Speed Records',
      views: '39,037,852 views  Feb 8, 2016'
    }
}, {
  iframe: 'https://www.youtube.com/embed/-uN1Q98UMO4?si=ABsXvkI8WbA-IGWY',
  time: '8:32',
  profile: 'https://yt3.ggpht.com/3MC9XX7rtxeS55uoOQG2nvJ7zaBd17r8Uh0yk_R3KyKjAK_u4RlHhZcTCkx4yym0guGWdefD5Q=s48-c-k-c0x00ffffff-no-rj',
    stat: {
      title: "Most overpowered way to build mobile apps?",
      author: 'Beyond Fireship',
      views: '538K views &#183; 8 months ago'
    }
}, {
  iframe: 'https://www.youtube.com/embed/EKRdobRY-fc?si=Dwnl0iHS-u0m8BxE',
  time: '11:13',
  profile: 'https://yt3.ggpht.com/1FEdfq3XpKE9UrkT4eOc5wLF2Bz-42sskTi0RkK4nPh4WqCbVmmrDZ5SVEV3WyvPdkfR8sw2=s48-c-k-c0x00ffffff-no-rj',
    stat: {
      title: "Open source ka NAATAK",
      author: 'Chai aur Code',
      views: '79K views &#183; 10 days ago'
    }
}, {
  iframe: 'https://www.youtube.com/embed/lFqxenB9CX8?si=npXl4kM546XLR_y2',
  time: '17:02',
  profile: 'https://yt3.ggpht.com/eLYdQLsjImWTY0RHLlJFA9R9h64dQYpU_tI0ShcZAskhUm2yCXEXQrX9SSSFAkBFzCJ_RtckpzQ=s48-c-k-c0x00ffffff-no-rj',
    stat: {
      title: "50+ LPA Roadmap | ezSnippet | Neeraj Walia",
      author: 'Neeraj Walia',
      views: '261K views &#183; 7 days ago'
    }
}, {
  iframe: 'https://www.youtube.com/embed/DNPF0oPcMDs?si=gekcI05zNwjCWPwV',
  time: '52:32',
  profile: 'https://yt3.ggpht.com/ytc/AIf8zZTDkajQxPa4sjDOW-c3er1szXkSAO-H9TiF4-8u_Q=s48-c-k-c0x00ffffff-no-rj',
    stat: {
      title: "Beau Carnes: Running the Largest Tutorial Channel - freeCodeCamp.org Podcast",
      author: 'freeCodeCamp.org',
      views: '24K views &#183; 3 days ago'
    }
}];

let videosHtml = '';

video.forEach((video) => {
  videosHtml = videosHtml + `
    <div class="video-preview">
        <div class="thumbnail-row">
          <iframe width="500" height="168.33" class="thumbnail" src="${video.iframe}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <div class="video-time">${video.time}</div>
        </div>
        <div class="video-info-grid">
          <div class="channel-picture">
            <img class="profile-picture" src="${video.profile}">
          </div>
        <div class="video-info">
          <p class="video-title">${video.stat.title}</p>
          <P class="video-author">${video.stat.author}</P>
          <p class="video-stats">${video.stat.views}</p>
        </div>
        </div>
      </div>
      `;
});

console.log(videosHtml);

document.querySelector('.video-grid').innerHTML = videosHtml;
