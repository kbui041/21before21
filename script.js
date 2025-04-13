const tasks = ["Take a solo trip to a city you've never visited", "Reconnect with someone from your past", "Try an extreme sport or adventurous activity", "Read at least 5 challenging books", "Volunteer for a cause that matters to me", "Complete a 30-day personal challenge", "Wake up early to watch the sunrise in a beautiful spot", "Go on a solo hike", "Spend a full day offline", "Take a spontaneous day-trip, no planning", "Interview three people about how they found their passion.", "Build a small personal project and finish it", "Go bungee jumping", "Complete a 5k", "Get a piercing", "Go skydiving", "Go camping","Watch Lebron play live in a basketball game", "Go to a Seahawks game",  "Go to a Sounders game with someone new", "Watch a tennis match live"];
const checklist = document.getElementById('checklist');

tasks.forEach(function(task) {



  const listItem = document.createElement('li');


  listItem.textContent = task;


  checklist.appendChild(listItem);

  listItem.addEventListener('click', function() {
    listItem.classList.toggle('completed');
  });
});

