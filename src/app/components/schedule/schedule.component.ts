import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent {
  activeDay = 0; // Default to the first day

  schedule = [
    {
      date: 'Day 1 - June 26, 2025',
      sessions: [
        { time: '09:00 AM', session1: 'Opening Ceremony', speaker1: 'Event Host', location1: 'Main Hall', session2: 'AI Ethics', speaker2: 'Dr. Smith', location2: 'Room A' },
        { time: '10:30 AM', session1: 'ML in Finance', speaker1: 'Jane Doe', location1: 'Room B', session2: 'Intro to Deep Learning', speaker2: 'John Doe', location2: 'Room C' },
        { time: '02:00 PM', session1: 'Data Science for Social Good', speaker1: 'Emily Johnson', location1: 'Room A' }
      ]
    },
    {
      date: 'Day 2 - June 27, 2025',
      sessions: [
        { time: '09:00 AM', session1: 'Blockchain & AI', speaker1: 'Alice White', location1: 'Main Hall', session2: 'AI in Healthcare', speaker2: 'Dr. Brown', location2: 'Room B' },
        { time: '11:00 AM', session1: 'Cybersecurity & AI', speaker1: 'Mark Lee', location1: 'Room C' },
        { time: '03:00 PM', session1: 'Panel Discussion', speaker1: 'Various Speakers', location1: 'Main Hall' }
      ]
    },
    {
      date: 'Day 3 - June 28, 2025',
      sessions: [
        { time: '10:00 AM', session1: 'Future of AI', speaker1: 'Panel Experts', location1: 'Main Hall' },
        { time: '01:00 PM', session1: 'Closing Ceremony', speaker1: 'Event Host', location1: 'Main Hall' }
      ]
    }
  ];
}
