// Application State
let currentEvent = '';
let projects = {
    'iship-1': [
        {
            name: 'AI-Powered Analytics',
            team: 'Team Alpha',
            description: 'Advanced analytics platform using machine learning',
            members: [
                { name: 'John Doe', role: 'Team Lead', email: 'john@example.com', skills: 'Python, ML, Leadership' }
            ],
            category: 'AI/ML',
            techStack: 'Python, TensorFlow, React',
            github: 'https://github.com/team-alpha/ai-analytics'
        },
        {
            name: 'Smart City Solutions',
            team: 'Team Beta',
            description: 'IoT-based smart city management system',
            members: [
                { name: 'Jane Smith', role: 'Team Lead', email: 'jane@example.com', skills: 'IoT, Node.js, Leadership' }
            ],
            category: 'IoT',
            techStack: 'Node.js, MongoDB, Arduino',
            github: 'https://github.com/team-beta/smart-city'
        }
    ],
    'iship-2': [],
    'project-space': [
        {
            name: 'EcoTrack Mobile',
            team: 'Team Gamma',
            description: 'Mobile app for environmental tracking',
            members: [
                { name: 'Mike Johnson', role: 'Team Lead', email: 'mike@example.com', skills: 'React Native, Design' }
            ],
            category: 'Mobile App',
            techStack: 'React Native, Firebase',
            github: 'https://github.com/team-gamma/ecotrack'
        }
    ]
};

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
    initializeLucideIcons();
    setupNavigation();
    setupChart();
    updateProjectCounts();
    
    // Add staggered animation to cards
    const cards = document.querySelectorAll('.event-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
});

//Initialize Lucide Icons
function initializeLucideIcons() {
    lucide.createIcons();
}

// Navigation System
function setupNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    const pages = document.querySelectorAll('.page');
    
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            const targetSection = this.dataset.section;
            switchToSection(targetSection);
        });
    });
}

function switchToSection(sectionId) {
    // Update navigation
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
        const indicator = item.querySelector('.active-indicator');
        if (indicator) indicator.remove();
    });
    
    const activeNavItem = document.querySelector(`[data-section="${sectionId}"]`);
    activeNavItem.classList.add('active');
    
    if (!activeNavItem.querySelector('.active-indicator')) {
        const indicator = document.createElement('div');
        indicator.className = 'active-indicator';
        activeNavItem.appendChild(indicator);
    }
    
    // Update pages with smooth transition
    document.querySelectorAll('.page').forEach(page => {
        if (page.classList.contains('active')) {
            page.style.animation = 'fadeOut 0.3s ease-out';
            setTimeout(() => {
                page.classList.remove('active');
                page.style.animation = '';
            }, 300);
        }
    });
    
    setTimeout(() => {
        const targetPage = document.getElementById(sectionId);
        targetPage.classList.add('active');
        targetPage.style.animation = 'fadeInSlide 0.5s ease-out';
        
        // Update project grids if switching to event page
        if (sectionId !== 'dashboard') {
            updateProjectGrid(sectionId);
        }
    }, 300);
}











var i1Total = 0;
var i1Reg = 0;
function addIship()
{
//   window.open("form.html", "_blank"); 
    document.getElementById('form-start').style.display = 'block'
}

function getDetails(event)
{
      event.preventDefault();
      var teamName =  document.getElementById('team').value
      var projectName= document.getElementById('project').value
      var mem1 = document.getElementById('m1').value
      var mem2 = document.getElementById('m2').value
      var mem3 = document.getElementById('m3').value


      var p1 = document.createElement('p') 
      p1.innerText = `Team Name: ${teamName}`
      var p2 = document.createElement('h2') 
      p2.innerText = projectName
      var p3 = document.createElement('p') 
      p3.innerText = `Team Member 1: ${mem1}`
      var p4 = document.createElement('p') 
      p4.innerText = `Team Member 2: ${mem2}`
      var p5 = document.createElement('p') 
      p5.innerText = `Team Member 3: ${mem3}`

      var d = document.createElement('div')
      d.appendChild(p2)
      d.appendChild(p1)
      d.appendChild(p3)
      d.appendChild(p4)
      d.appendChild(p5)

      var but_1 = document.createElement('button')
      but_1.innerText = 'View'
      but_1.setAttribute('id','pro-but')
      d.appendChild(but_1)

      var but_2 = document.createElement('button')
      but_2.innerText = 'Edit'
      but_2.setAttribute('id','pro-but')
      d.appendChild(but_2)
      

      var d1 = document.createElement('div')
      d1.setAttribute('id','project-div')
      d1.appendChild(d)
    

      var parent  = document.getElementById('project-divs')
      parent.appendChild(d1)

      document.getElementById('form-details').reset()
      document.getElementById('form-start').style.display = 'none'
      document.getElementById('i1-total').innerText = i1Total+1

      i1Total = i1Total+1
      document.getElementById('i1-reg').innerText = i1Reg+3
      i1Reg = i1Reg+3

}


document.getElementById('close-mark').addEventListener('click',()=>
{
        document.getElementById('form-start').style.display = 'none'
}
);


var i2Total = 0;
var i2Reg = 0;
function addIship2()
{
//   window.open("form.html", "_blank"); 
    document.getElementById('form-start2').style.display = 'block'
}

function getDetails2(event)
{
      event.preventDefault();
      var teamName =  document.getElementById('team2').value
      var projectName= document.getElementById('project2').value
      var mem1 = document.getElementById('m12').value
      var mem2 = document.getElementById('m22').value
      var mem3 = document.getElementById('m32').value


      var p1 = document.createElement('p') 
      p1.innerText = `Team Name: ${teamName}`
      var p2 = document.createElement('h2') 
      p2.innerText = projectName
      var p3 = document.createElement('p') 
      p3.innerText = `Team Member 1: ${mem1}`
      var p4 = document.createElement('p') 
      p4.innerText = `Team Member 2: ${mem2}`
      var p5 = document.createElement('p') 
      p5.innerText = `Team Member 3: ${mem3}`

      var d = document.createElement('div')
      d.appendChild(p2)
      d.appendChild(p1)
      d.appendChild(p3)
      d.appendChild(p4)
      d.appendChild(p5)
      

      var d1 = document.createElement('div')
      d1.setAttribute('id','project-div2')
      d1.appendChild(d)

      var but_1 = document.createElement('button')
      but_1.innerText = 'View'
      but_1.setAttribute('id','pro-but')
      d.appendChild(but_1)

      var but_2 = document.createElement('button')
      but_2.innerText = 'Edit'
      but_2.setAttribute('id','pro-but')
      d.appendChild(but_2)
    

      var parent  = document.getElementById('project-divs2')
      parent.appendChild(d1)

      document.getElementById('form-details2').reset()
      document.getElementById('form-start2').style.display = 'none'
      document.getElementById('i2-total').innerText = i2Total+1
      i2Total = i2Total+1
      document.getElementById('i2-reg').innerText = i2Reg+3
      i2Reg = i2Reg+3
}


document.getElementById('close-mark2').addEventListener('click',()=>
{
        document.getElementById('form-start2').style.display = 'none'
}
);


var pTotal = 0;
var pReg = 0;
function addIship3()
{
//   window.open("form.html", "_blank"); 
    document.getElementById('form-start3').style.display = 'block'
}

function getDetails3(event)
{
      event.preventDefault();
      var teamName =  document.getElementById('team3').value
      var projectName= document.getElementById('project3').value
      var mem1 = document.getElementById('m13').value
      var mem2 = document.getElementById('m23').value
      var mem3 = document.getElementById('m33').value


      var p1 = document.createElement('p') 
      p1.innerText = `Team Name: ${teamName}`
      var p2 = document.createElement('h2') 
      p2.innerText = projectName
      var p3 = document.createElement('p') 
      p3.innerText = `Team Member 1: ${mem1}`
      var p4 = document.createElement('p') 
      p4.innerText = `Team Member 2: ${mem2}`
      var p5 = document.createElement('p') 
      p5.innerText = `Team Member 3: ${mem3}`

      var d = document.createElement('div')
      d.appendChild(p2)
      d.appendChild(p1)
      d.appendChild(p3)
      d.appendChild(p4)
      d.appendChild(p5)
      

      var d1 = document.createElement('div')
      d1.setAttribute('id','project-div3')
      d1.appendChild(d)

      var but_1 = document.createElement('button')
      but_1.innerText = 'View'
      but_1.setAttribute('id','pro-but')
      d.appendChild(but_1)

      var but_2 = document.createElement('button')
      but_2.innerText = 'Edit'
      but_2.setAttribute('id','pro-but')
      d.appendChild(but_2)
    

      var parent  = document.getElementById('project-divs3')
      parent.appendChild(d1)

      document.getElementById('form-details3').reset()
      document.getElementById('form-start3').style.display = 'none'
      document.getElementById('p-total').innerText = pTotal+1
      pTotal = pTotal+1
      document.getElementById('p-reg').innerText = pReg+3
      pReg = pReg+3
}


document.getElementById('close-mark3').addEventListener('click',()=>
{
        document.getElementById('form-start3').style.display = 'none'
}
);

