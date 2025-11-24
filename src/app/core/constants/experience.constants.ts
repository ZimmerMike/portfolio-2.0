import { ExperienceEvent } from "../interfaces/experience-event.interface";

export class ExperienceConstants {
  public static readonly JOB_EVENTS: ExperienceEvent[] = [
    {
      companyName: 'Centro de Ingles Personalizado (CIP)',
      position: 'English teacher',
      startDate: '01/03/2020',
      endDate: '20/05/2021',
      description: 'EXPERIENCE.CIP_DESCRIPTION'
    },
    {
      companyName: 'NetLogistiK',
      position: 'Software Developer',
      startDate: '20/05/2021',
      endDate: '31/01/2024',
      description: 'EXPERIENCE.NETLOGISTIK_DESCRIPTION'
    },
    {
      companyName: 'Babel',
      position: 'Front-end Angular Developer',
      startDate: '17/06/2024',
      currentJob: true,
      description: 'EXPERIENCE.BABEL_DESCRIPTION'
    }
  ];
  public static readonly MOBILE_BREAKPOINT = '(max-width: 768px)';
  public static readonly TIMELINE_ALTERNATE_ALIGN = 'alternate';
  public static readonly TIMELINE_LEFT_ALIGN = 'left';
}