const tasks = [
    "Take a solo trip to a city you've never visited",
    "Reconnect with someone from your past",
    "Try an extreme sport or adventurous activity",
    "Read at least 5 challenging books",
    "Volunteer for a cause that matters to me",
    "Complete a 30-day personal challenge",
    "Wake up early to watch the sunrise in a beautiful spot",
    "Go on a solo hike",
    "Spend a full day offline",
    "Take a spontaneous day-trip, no planning",
    "Interview three people about how they found their passion.",
    "Build a small personal project and finish it",
    "Go bungee jumping",
    "Complete a 5k",
    "Get a piercing",
    "Go skydiving",
    "Go camping",
    "Watch Lebron play live in a basketball game",
    "Go to a Seahawks game",
    "Go to a Sounders game with someone new",
    "Watch a tennis match live"
  ];
  
  const checklist = document.getElementById('checklist');
  
  tasks.forEach((task, index) => {
    const listItem = document.createElement('li');
    const icon = document.createElement('span');
    icon.classList.add('check-icon');
    const text = document.createTextNode(task);
    listItem.appendChild(icon);
    listItem.appendChild(text);
    listItem.style.animationDelay = `${index * 0.1}s`;
  
    listItem.addEventListener('click', () => {
      const wasCompleted = listItem.classList.contains('completed');
      listItem.classList.toggle('completed');
      updateProgress();
  
      if (!wasCompleted) {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.6 },
          colors: ['#ff0a54', '#ff477e', '#ff7096', '#ff85a1', '#fbb1bd']
        });
      }
    });
  
    checklist.appendChild(listItem);
  });
  
  function updateProgress() {
    const completedTasks = document.querySelectorAll('.completed').length;
    const totalTasks = tasks.length;
    const progress = (completedTasks / totalTasks) * 100;
  
    document.getElementById('progress-bar').style.width = `${progress}%`;
    document.getElementById('progress-text').textContent = `${completedTasks} / ${totalTasks} completed`;
  }
  
  function updateCountdown() {
    const countdownElement = document.getElementById('countdown');
    const messageElement = document.getElementById('countdown-message');
    const targetDate = new Date('2026-02-12T00:00:00');
    const now = new Date();
    const difference = targetDate - now;
  
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);
  
    countdownElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s left`;
  
    countdownElement.classList.remove('status-green', 'status-orange', 'status-red');
  
    if (days > 60) {
      countdownElement.classList.add('status-green');
      messageElement.textContent = "Plenty of time — stay steady! 🚀";
    } else if (days > 30) {
      countdownElement.classList.add('status-orange');
      messageElement.textContent = "You're getting closer! Keep it up 💡";
    } else {
      countdownElement.classList.add('status-red');
      messageElement.textContent = "Final push! Let's go! 🔥";
    }
  }
  
  setInterval(updateCountdown, 1000);
  updateCountdown();
  updateProgress();
  
  document.getElementById('theme-toggle').addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    document.documentElement.setAttribute('data-theme', currentTheme === 'dark' ? 'light' : 'dark');
  });
  
  document.getElementById('random-task').addEventListener('click', () => {
    const randomTask = tasks[Math.floor(Math.random() * tasks.length)];
    const taskDisplay = document.getElementById('random-task-display');
    taskDisplay.textContent = `✨ Try this: ${randomTask}`;
    taskDisplay.classList.add('animate');
    setTimeout(() => taskDisplay.classList.remove('animate'), 500);
  });
  