
    console.log(window.location.href);
    console.log(window.location.pathname);
    var pathName = window.location.pathname;

    var index = document.getElementById('index');
    console.log(index);
    // document.getElementById('active_menu').addClass('set_active');
    var sampleArea = document.getElementById('sampleArea');
    console.log(sampleArea);

    // Test web bos template
    const person = {
        name: 'Wes',
        job: 'Web Developer',
        city: 'Hamilton',
        bio: 'Wes is a really cool guy that loves to teach web development!'
    }

    // And then create our markup:
    const markup = `
     <div class="person">
        <h2>
            ${person.name}
        </h2>
        <p class="location">${person.city}</p>
        <p class="bio">${person.bio}</p>
     </div>
    `;

    sampleArea.innerHTML = markup;