const cloudSkills = [
    { name: "AWS" },
    { name: "Azure" },
    { name: "GCP" },
    { name: "Kubernetes" },
    { name: "Docker" },
    { name: "AWS" },
    { name: "Azure" },
  ];

  const frameworkSkills = [
    { name: "AWS" },
    { name: "Azure" },
    { name: "GCP" },
    { name: "Kubernetes" },
    { name: "Docker" },
    { name: "AWS" },
    { name: "Azure" },
  ];

  const languagesSkills = [
    { name: "AWS" },
    { name: "Azure" },
    { name: "GCP" },
    { name: "Kubernetes" },
    { name: "Docker" },
    { name: "AWS" },
    { name: "Azure" },
  ];

  const databasesSkills = [
    { name: "AWS" },
    { name: "Azure" },
    { name: "GCP" },
    { name: "Kubernetes" },
    { name: "Docker" },
    { name: "AWS" },
    { name: "Azure" },
  ];

window.addEventListener("DOMContentLoaded", async function () {
    async function get(url) {
        const resp = await fetch(url);
        return resp.json();
    }   

    const alignments = ['flex-start', 'center', 'flex-end'];

    document.querySelectorAll(".cloud-card").forEach(function (el) {
        // Set the styles for the container (cloud-card)
        el.style.display = 'flex';
        el.style.flexWrap = 'wrap';
        el.style.justifyContent = 'center';
        el.style.gap = '10px';
        el.style.padding = '20px';
        el.style.backgroundColor = '#f9bf3f';
        el.style.borderRadius = '10px';
      
        cloudSkills.forEach(skill => {
          // Create the skill pill element
          const pill = document.createElement("div");
      
          // Randomly assign alignment (top, center, bottom)
          const randomAlignment = alignments[Math.floor(Math.random() * alignments.length)];
      
          // Set the styles for the pill
          pill.textContent = skill.name;
          pill.style.display = 'inline-block';
          pill.style.padding = '10px 20px';
          pill.style.backgroundColor = '#3498db';
          pill.style.color = 'white';
          pill.style.borderRadius = '30px';
          pill.style.fontSize = '14px';
          pill.style.fontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif';
          pill.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
          pill.style.alignSelf = randomAlignment;  // Random alignment
      
          // Append the pill to the container
          el.appendChild(pill);
        });
      });

      document.querySelectorAll(".langugages-card").forEach(function (el) {
        // Set the styles for the container (cloud-card)
        el.style.display = 'flex';
        el.style.flexWrap = 'wrap';
        el.style.justifyContent = 'center';
        el.style.gap = '10px';
        el.style.padding = '20px';
        el.style.backgroundColor = '#f9bf3f';
        el.style.borderRadius = '10px';
      
        languagesSkills.forEach(skill => {
          // Create the skill pill element
          const pill = document.createElement("div");
      
          // Randomly assign alignment (top, center, bottom)
          const randomAlignment = alignments[Math.floor(Math.random() * alignments.length)];
      
          // Set the styles for the pill
          pill.textContent = skill.name;
          pill.style.display = 'inline-block';
          pill.style.padding = '10px 20px';
          pill.style.backgroundColor = '#3498db';
          pill.style.color = 'white';
          pill.style.borderRadius = '30px';
          pill.style.fontSize = '14px';
          pill.style.fontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif';
          pill.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
          pill.style.alignSelf = randomAlignment;  // Random alignment
      
          // Append the pill to the container
          el.appendChild(pill);
        });
      });

      document.querySelectorAll(".frameworks-card").forEach(function (el) {
        // Set the styles for the container (cloud-card)
        el.style.display = 'flex';
        el.style.flexWrap = 'wrap';
        el.style.justifyContent = 'center';
        el.style.gap = '10px';
        el.style.padding = '20px';
        el.style.backgroundColor = '#f9bf3f';
        el.style.borderRadius = '10px';
      
        frameworkSkills.forEach(skill => {
          // Create the skill pill element
          const pill = document.createElement("div");
      
          // Randomly assign alignment (top, center, bottom)
          const randomAlignment = alignments[Math.floor(Math.random() * alignments.length)];
      
          // Set the styles for the pill
          pill.textContent = skill.name;
          pill.style.display = 'inline-block';
          pill.style.padding = '10px 20px';
          pill.style.backgroundColor = '#3498db';
          pill.style.color = 'white';
          pill.style.borderRadius = '30px';
          pill.style.fontSize = '14px';
          pill.style.fontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif';
          pill.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
          pill.style.alignSelf = randomAlignment;  // Random alignment
      
          // Append the pill to the container
          el.appendChild(pill);
        });
      });

      document.querySelectorAll(".databases-card").forEach(function (el) {
        // Set the styles for the container (cloud-card)
        el.style.display = 'flex';
        el.style.flexWrap = 'wrap';
        el.style.justifyContent = 'center';
        el.style.gap = '10px';
        el.style.padding = '20px';
        el.style.backgroundColor = '#f9bf3f';
        el.style.borderRadius = '10px';
      
        databasesSkills.forEach(skill => {
          // Create the skill pill element
          const pill = document.createElement("div");
      
          // Randomly assign alignment (top, center, bottom)
          const randomAlignment = alignments[Math.floor(Math.random() * alignments.length)];
      
          // Set the styles for the pill
          pill.textContent = skill.name;
          pill.style.display = 'inline-block';
          pill.style.padding = '10px 20px';
          pill.style.backgroundColor = '#3498db';
          pill.style.color = 'white';
          pill.style.borderRadius = '30px';
          pill.style.fontSize = '14px';
          pill.style.fontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif';
          pill.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
          pill.style.alignSelf = randomAlignment;  // Random alignment
      
          // Append the pill to the container
          el.appendChild(pill);
        });
      });

//    document.querySelectorAll(".cloud-card").forEach(async function (el) {
//         // const userId = el.getAttribute("user-id");

//         // const response = await get(`https://api.stackexchange.com/2.2/users/${userId}?site=stackoverflow`);
//         // const user = response.items[0];
//         // const { profile_image, website_url, link, display_name, reputation, user_id } = user;
//         // const { gold, silver, bronze } = user.badge_counts;

//         el.innerHTML = `
//         <div style="font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji; border-radius: 6px; line-height: 1.5; padding: 16px; font-size: 14px; color: #24292e; background-color: #f9bf3f;">
//                 <div style="display: flex; align-items: center;">
//                     ${cloudSkills.forEach(skill => {
//                         const skillItem = document.createElement("li");
//                         skillItem.textContent = skill.name;
//                     })}
//                 </div>
//         `;
//    });

    // document.querySelectorAll(".github-card").forEach(async function (el) {
    //     const username = el.getAttribute("username");

    //     const response = await get(`https://api.github.com/users/${username}`);
    //     const { name, avatar_url, public_repos, followers, html_url, following } = response;

    //     el.innerHTML = `
    //         <div style="font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji; border-radius: 6px; line-height: 1.5; padding: 16px; font-size: 14px; color: #24292e; background-color: #f9bf3f;">
    //             <div style="display: flex; align-items: center; margin-top: -4px">
    //                 <img style="width: 48px; height: 48px; border-radius: 50%" src="${avatar_url}" alt="Profile image"></img>
    //                 <div style="display: flex; flex-direction: column; margin-left: 12px">
    //                     <span style="font-weight: 500; color: #black; font-size: 18px">
    //                         <a style="text-decoration: none; color: inherit;" target="_blank" href="${html_url}">
    //                             ${name}
    //                         </a>
    //                     </span>
    //                     <span style="font-weight: 400; color: #586069; font-size: 12px">
    //                         @${html_url.replace('https://', '')}
    //                     </span>
    //                 </div>
    //             </div>

    //             <div style="margin-top: 12px; display: flex; justify-content: space-evenly; align-items: center; ">
    //                 <div style="display: flex; flex-direction: column;">
    //                     <span style="font-size: 10px; font-weight: 500; color: #586069;">
    //                         REPOSITORIES
    //                     </span>
    //                     <span style="font-weight: 600; color: #211F1F; font-size: 32px; line-height: 1">
    //                         ${public_repos}
    //                     </span>
    //                 </div>
    //                 <div style="display: flex; flex-direction: column;">
    //                     <span style="font-size: 10px; font-weight: 500; color: #586069;">
    //                         FOLLOWERS
    //                     </span>
    //                     <span style="font-weight: 600; color: #211F1F; font-size: 32px; line-height: 1">
    //                         ${followers}
    //                     </span>
    //                 </div>
    //                 <div style="display: flex; flex-direction: column;">
    //                     <span style="font-size: 10px; font-weight: 500; color: #586069;">
    //                         FOLLOWING
    //                     </span>
    //                     <span style="font-weight: 600; color: #211F1F; font-size: 32px; line-height: 1">
    //                         ${following}
    //                     </span>
    //                 </div>
    //             </div>
    //         </div>
    //     `;
    // });
});