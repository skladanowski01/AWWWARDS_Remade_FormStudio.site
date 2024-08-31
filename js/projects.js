//Projects

const portfolio = [
    {
        name: 'PROJECT ONE',
        type: 'my-Own Co',
        position: 'start',
        image: 'https://images.unsplash.com/photo-1598368195835-91e67f80c9d7?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        name: 'SECOND PROJECT',
        type: 'Interior Designer Project',
        position: 'mid',
        image: 'https://images.unsplash.com/photo-1685181730426-c76205419fc3?q=80&w=2727&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        name: 'THE THIRD',
        type: 'Photographer Co',
        position: 'end',
        image: 'https://images.unsplash.com/photo-1486149370945-b0e59dc9485b?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        name: '4TH',
        type: 'Animal Shop',
        position: 'end',
        image: 'https://images.unsplash.com/photo-1599911296860-bde00e67e4bb?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        name: 'FIVETH',
        type: 'Beauty Co Website',
        position: 'mid',
        image: 'https://images.unsplash.com/photo-1695527081782-33e110235ade?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        name: 'THE SIX',
        type: 'FoodTruck Website',
        position: 'start',
        image: 'https://images.unsplash.com/photo-1467278941343-c6d371b23a90?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        name: 'PROJECT NUMBER SEVEN',
        type: 'Adversting Co',
        position: 'end',
        image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }    
]

//Projects / portfolio
const createProjects = () => {
    portfolio.forEach(project => {
        let panel = document.createElement('div');
        panel.classList.add('project', `${project.position}`);

        let imageContainer = document.createElement('div');
        imageContainer.className = 'image__container';

        let image = document.createElement('img');
        image.classList.add('project__image');
        image.src = project.image;

        let projectDetails = document.createElement('div');
        projectDetails.classList.add('project__details');

        let projectTitle = document.createElement('p');
        projectTitle.innerText = project.name;

        let projectType = document.createElement('p');
        projectType.innerText = project.type;

        projectDetails.append(projectTitle, projectType);

        imageContainer.appendChild(image);
        panel.append(imageContainer, projectDetails);

        document.querySelector('.projects__slider').appendChild(panel);
    })
}

//Blog posts
const blogPosts = [
    {
        title: 'How I started',
        time: '4 mins',
        image: 'https://images.unsplash.com/photo-1720048169707-a32d6dfca0b3?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'        
    },
    {
        title: 'First projects',
        time: '2 mins',
        image: 'https://images.unsplash.com/photo-1523726491678-bf852e717f6a?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'        
    },
    {
        title: 'After courses',
        time: '3 mins',
        image: 'https://images.unsplash.com/photo-1543622125-91437eb0d8de?q=80&w=2572&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'        
    },
    {
        title: 'About studies',
        time: '5 mins',
        image: 'https://images.unsplash.com/photo-1604882737274-4afaddefec9b?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'        
    }
]

const createBlogposts = () => {
    blogPosts.forEach(post => {
        let blogPostSection = document.createElement('div');
        blogPostSection.classList.add('blog__post');

        let postDiv = document.createElement('div');
        postDiv.classList.add('post');

        let imageContainer = document.createElement('div');
        imageContainer.classList.add('post__image__container');

        let image = document.createElement('img');
        image.classList.add('blog__post__img');
        image.src = post.image;

        let postDetails = document.createElement('div');
        postDetails.classList.add('post__details');

        let postTitle = document.createElement('p');
        postTitle.innerText = post.title;

        let postTime = document.createElement('p');
        postTime.innerText = post.time;

        imageContainer.appendChild(image);
        postDetails.append(postTitle, postTime);
        postDiv.append(imageContainer, postDetails)
        blogPostSection.appendChild(postDiv);

        document.getElementById('blog').appendChild(blogPostSection)

    })
}


//Export
export {
    createProjects,
    createBlogposts
}