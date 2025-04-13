const tasks = ["Take a solo trip to a city you've never visited", "Reconnect with someone from your past", "Try an extreme sport or adventurous activity", "Read at least 5 challenging books", "Volunteer for a cause that matters to me", "Complete a 30-day personal challenge", "Wake up early to watch the sunrise in a beautiful spot", "Go on a solo hike", "Spend a full day offline", "Take a spontaneous day-trip, no planning", "Interview three people about how they found their passion.", "Build a small personal project and finish it", "Go bungee jumping", "Complete a 5k", "Get a piercing", "Go skydiving", "Go camping","Watch Lebron play live in a basketball game", "Go to a Seahawks game",  "Go to a Sounders game with someone new", "Watch a tennis match live"];
const checklist = document.getElementById('checklist');

tasks.forEach(function(task) {

  const listItem = document.createElement('li');
  const icon= document.createElement('span');
  icon.classList.add('check-icon');
  const text = document.createTextNode(task);

  listItem.appendChild(icon);
  listItem.appendChild(text);


  listItem.addEventListener('click', function() {
    listItem.classList.toggle('completed');
    updateProgress();
  });

  checklist.appendChild(listItem);
});

function updateProgress() {
    const totalTasks = tasks.length;
    const completedTasks = document.querySelectorAll('.completed').length;
    const progressPercent = (completedTasks / totalTasks) * 100;
  
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');
  
    progressBar.style.width = `${progressPercent}%`;
    progressText.textContent = `${completedTasks} / ${totalTasks} completed`;
  }

updateProgress();


