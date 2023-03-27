const Routes = {
  dashboard: '/dashboard',
  jobPost: '/job-post',
  paymentHistory: '/payment-history',
  postedJob: '/posted-job',
  JobDetails: '/job-details',
  JobReview: '/job-review',
  JobPostSuccess: '/job-post-success',
  LandingPage: '/landing-page',

  user: {
    link1: '/link1',
    link2: '/link2',
  }
}

export const links = [
  {
    name: 'Dashboard', url: Routes.dashboard
  },
  {
    name: 'Job Post', url: Routes.jobPost
  },
  {
    name: 'Payment History', url: Routes.paymentHistory
  },
  {
    name: 'Posted Job', url: Routes.postedJob
  },
  {
    name: 'Job Details', url: Routes.JobDetails
  },
  {
    name: 'Job Review', url: Routes.JobReview
  },
  {
    name: 'Job Post Success', url: Routes.JobPostSuccess
  },
  {
    name: 'Landing Page', url: Routes.LandingPage
  },
  {
    name: 'User', url: "",
    subLinks: [
      {
        name: 'Link 1', url: Routes.user.link1
      },
      {
        name: 'Link 2', url: Routes.user.link1
      },
    ]
  },
]