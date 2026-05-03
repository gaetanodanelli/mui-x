import type {
  EventDialogLocaleText,
  EventCalendarLocaleText,
  EventTimelineLocaleText,
} from '../models/translations';
import {
  getSchedulerLocalization,
  type SchedulerLocalization,
} from '../utils/getSchedulerLocalization';

const itITDialog: Partial<EventDialogLocaleText> = {
  // EventDialog
  colorPickerLabel: "Colore dell'evento",
  dateTimeSectionLabel: 'Data e ora',
  resourceColorSectionLabel: 'Risorsa e colore',
  allDayLabel: 'Tutto il giorno',
  closeButtonAriaLabel: 'Chiudi',
  closeButtonLabel: 'Chiudi',
  deleteEvent: 'Elimina evento',
  descriptionLabel: 'Descrizione',
  endDateLabel: 'Data di fine',
  endTimeLabel: 'Ora di fine',
  eventTitleAriaLabel: "Titolo dell'evento",
  generalTabLabel: 'Generale',
  labelNoResource: 'Nessuna risorsa',
  labelInvalidResource: 'Risorsa non valida',
  recurrenceLabel: 'Ricorrenza',
  recurrenceNoRepeat: 'Non ripetere',
  recurrenceCustomRepeat: 'Regola di ripetizione personalizzata',
  recurrenceDailyPresetLabel: 'Si ripete ogni giorno',
  recurrenceDailyFrequencyLabel: 'giorni',
  recurrenceEndsLabel: 'Termina',
  recurrenceEndsAfterLabel: 'Dopo',
  recurrenceEndsNeverLabel: 'Mai',
  recurrenceEndsUntilLabel: 'Fino a',
  recurrenceEndsTimesLabel: 'volte',
  recurrenceEveryLabel: 'Ogni',
  recurrenceRepeatLabel: 'Ripeti',
  recurrenceTabLabel: 'Ricorrenza',
  recurrenceMainSelectCustomLabel: 'Ricorrenza',
  recurrenceWeeklyFrequencyLabel: 'settimane',
  recurrenceWeeklyPresetLabel: (weekday) => `Si ripete ogni settimana il ${weekday}`,
  recurrenceMonthlyFrequencyLabel: 'mesi',
  recurrenceMonthlyDayOfMonthLabel: (dayNumber) => `Giorno ${dayNumber}`,
  recurrenceMonthlyLastWeekAriaLabel: (weekDay) => `${weekDay} dell'ultima settimana del mese`,
  recurrenceMonthlyLastWeekLabel: (weekDay) => `${weekDay} ultima settimana`,
  recurrenceMonthlyPresetLabel: (dayNumber) => `Si ripete ogni mese il giorno ${dayNumber}`,
  recurrenceMonthlyWeekNumberAriaLabel: (ord, weekDay) => `${weekDay} settimana ${ord} del mese`,
  recurrenceMonthlyWeekNumberLabel: (ord, weekDay) => `${weekDay} settimana ${ord}`,
  recurrenceWeeklyMonthlySpecificInputsLabel: 'Il',
  recurrenceYearlyFrequencyLabel: 'anni',
  recurrenceYearlyPresetLabel: (date) => `Si ripete ogni anno il ${date}`,
  noResourceAriaLabel: 'Nessuna risorsa specifica',
  resourceLabel: 'Risorsa',
  saveChanges: 'Salva',
  startDateAfterEndDateError: 'La data/ora di inizio deve essere precedente alla data/ora di fine.',
  startDateLabel: 'Data di inizio',
  startTimeLabel: 'Ora di inizio',

  // ScopeDialog
  all: 'Tutti gli eventi',
  cancel: 'Annulla',
  confirm: 'Conferma',
  onlyThis: 'Solo questo evento',
  radioGroupAriaLabel: 'Ambito di modifica degli eventi ricorrenti',
  thisAndFollowing: 'Questo e i seguenti eventi',
  title: 'Applica questa modifica a:',
};

const itITCalendar: Partial<Omit<EventCalendarLocaleText, keyof EventDialogLocaleText>> = {
  // ResourcesLegend
  hideEventsLabel: (resourceName) => `Nascondi eventi per ${resourceName}`,
  resourcesLabel: 'Risorse',
  resourcesLegendSectionLabel: 'Legenda risorse',
  showEventsLabel: (resourceName) => `Mostra eventi per ${resourceName}`,

  // ViewSwitcher
  agenda: 'Agenda',
  day: 'Giorno',
  month: 'Mese',
  other: 'Altro',
  today: 'Oggi',
  week: 'Settimana',
  time: 'Ora',
  days: 'Giorni',
  months: 'Mesi',
  weeks: 'Settimane',
  years: 'Anni',

  // DateNavigator
  closeSidePanel: 'Chiudi pannello laterale',
  openSidePanel: 'Apri pannello laterale',

  // Preferences menu
  amPm12h: '12 ore (1:00PM)',
  hour24h: '24 ore (13:00)',
  preferencesMenu: 'Impostazioni',
  showWeekends: 'Mostra fine settimana',
  showEmptyDaysInAgenda: 'Mostra giorni vuoti',
  showWeekNumber: 'Mostra numero settimana',
  timeFormat: 'Formato ora',
  viewSpecificOptions: (view) => `Opzioni vista ${view}`,

  // WeekView
  allDay: 'Tutto il giorno',

  // MonthView
  hiddenEvents: (hiddenEventsCount) => `Altri ${hiddenEventsCount}..`,
  nextTimeSpan: (timeSpan) => `${timeSpan} successivo`,
  previousTimeSpan: (timeSpan) => `${timeSpan} precedente`,
  resourceAriaLabel: (resourceName) => `Risorsa: ${resourceName}`,
  weekAbbreviation: 'S',
  weekNumberAriaLabel: (weekNumber) => `Settimana ${weekNumber}`,

  // EventItem
  eventItemMultiDayLabel: (endDate) => `Termina il ${endDate}`,

  // MiniCalendar
  miniCalendarLabel: 'Calendario',
  miniCalendarGoToPreviousMonth: 'Mostra mese precedente nel calendario',
  miniCalendarGoToNextMonth: 'Mostra mese successivo nel calendario',

  // Timeline title sub grid
  timelineResourceTitleHeader: 'Titolo risorsa',
};

const itITTimeline: Partial<Omit<EventTimelineLocaleText, keyof EventDialogLocaleText>> = {
  // Timeline title sub grid
  timelineResourceTitleHeader: 'Titolo risorsa',
};

export const itIT: SchedulerLocalization = getSchedulerLocalization({
  dialog: itITDialog,
  calendar: itITCalendar,
  timeline: itITTimeline,
});
