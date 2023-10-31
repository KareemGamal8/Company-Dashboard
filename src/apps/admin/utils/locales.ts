import { groupedTranslations, trans } from "@mongez/localization";
import mainTranslation from "shared/localization/index.json";

export { mainTranslation };

groupedTranslations(mainTranslation);

export function the(key: string) {
  return trans("the", { key: trans(key) });
}

// Add only common localization
groupedTranslations({
  the: {
    en: ":key",
    ar: "ال:key",
  },
  keywordsHint: {
    en: "Keywords are used for seo.",
    ar: "الكلمات الدليلية تستخدم للسيو.",
  },
  total_check_ins: {
    en: "Total Check Ins Count",
    ar: "إجمالي عمليات الدخول",
  },
  otherSettings: {
    en: "Other Settings",
    ar: "إعدادات أخرى",
  },
  totalEmployees: {
    en: "Total Employees",
    ar: "إجمالي الموظفين",
  },
  employees: {
    en: "Employees",
    ar: "الموظفين",
  },
  employee: {
    en: "Employee",
    ar: "موظف",
  },
  activeEmployees: {
    en: "Active Employees",
    ar: "الموظفين النشطين",
  },
  checkInHistory: {
    en: "Check In History",
    ar: "عدد مرات الدخول",
  },
  check_ins_count: {
    en: "Check Ins Count",
    ar: "عدد إجراءات الدخول",
  },
  enrolled_family_members_count: {
    en: "Enrolled Family Members Count",
    ar: "عدد أفراد الأسرة المسجلين",
  },
  topTenEmployees: {
    en: "Top Ten Employees",
    ar: "أفضل عشرة موظفين",
  },
  family_count: {
    en: "Family Count",
    ar: "عدد الأسرة",
  },
  totalActiveEmployees: {
    en: "Total Active Employees",
    ar: "إجمالي الموظفين النشطين",
  },
  selectGym: {
    en: "Select Gym",
    ar: "إختيار الجيم",
  },
  visit: {
    en: "Visit",
    ar: "زيارة",
  },
  phone_number: {
    en: "Phone Number",
    ar: "رقم التليفون",
  },
  markAsRead: {
    en: "Mark as read",
    ar: "التعليم كمقروءة",
  },
  decrease: {
    en: "Decrease",
    ar: "إنخفاض",
  },
  Sr: {
    en: "SR",
    ar: "ريال",
  },
  increase: {
    en: "increase",
    ar: "زيادة",
  },
  locale: {
    en: "Locale",
    ar: "اللغة",
  },
  totalBranches: {
    en: "Total Branches",
    ar: "عدد الفروع",
  },
  monthlyIncomeStatisticsTo: {
    en: "Monthly Income Statistics To",
    ar: "إحصائيات الدخل الشهرية لـ",
  },
  checkInCountThisMonth: {
    en: "Check In Count",
    ar: "عدد عمليات الدخول هذاالشهر",
  },
  totalCheckInCount: {
    en: "Total Check In Count",
    ar: "عدد عمليات الدخول الكلية",
  },
  changedByAdministration: {
    en: "It can only be changed by the administration",
    ar: "يمكن تغييرة فقط بواسطة الإدارة",
  },
  checkInsCountTitle: {
    en: "Check Ins Count",
    ar: " عمليات الدخول",
  },
  comparedToThePreviousMonth: {
    en: "Compared to the previous month",
    ar: "مقارنة بالشهر السابق",
  },
  monthlySales: {
    en: "Monthly Sales",
    ar: "المبيعآت الشهرية",
  },
  todayCheckIns: {
    en: "Today Check Ins",
    ar: "تسجيل الدخول اليومي",
  },
  monthlyCheckIns: {
    en: "Monthly Check Ins",
    ar: "تسجيل الدخول الشهري",
  },
  checkInsByBranches: {
    en: "Check Ins By Branches",
    ar: "إحصائيات الفروع",
  },
  profile: {
    en: "Profile",
    ar: "الصفحة الشخصية",
  },
  current_password: {
    en: "Current Password",
    ar: "كلمة المرور الحالية",
  },
  branches_share: {
    en: "Branches Share",
    ar: "حصة الفروع",
  },
  users: {
    en: "Users",
    ar: "المستخدمين",
  },
  selectedGymTitle: {
    en: "Please select one of your gym",
    ar: "من فضلك إختر واحد من فروع الجيم الخاصة بك",
  },
  branches_total_income: {
    en: "Branches Total Income",
    ar: "إجمالي دخل الفروع",
  },
  total_visits_share: {
    en: "Total Visits Share",
    ar: "حصة إجمالي الزيارات",
  },
  clearCache: {
    en: "Clear Cache",
    ar: "حذف الكاش",
  },
  switchAccount: {
    en: "Switch Account",
    ar: "تبديل الحسآب",
  },
  specification: {
    en: "Specification",
    ar: "المواصفات",
  },
  filterable: {
    en: "Filterable",
    ar: "قابل للبحث",
  },
  imageUpdatedSuccessfully: {
    en: "Image Updated Successfully",
    ar: "تم تحديث الصورة بنجآح",
  },
  rowOrder: {
    en: "Row Order",
    ar: "ترتيب الصف",
  },
  columns: {
    en: "Columns",
    ar: "الأعمدة",
  },
  network: {
    en: "Network",
    ar: "الشبكة",
  },
  suffix: {
    en: "Suffix",
    ar: "اللاحقة",
  },
  suffixHint: {
    en: "This will be shown after the value of the specification",
    ar: "سيتم عرض هذا بعد قيمة المواصفات",
  },
  filterableHint: {
    en: "If this is checked, this specification will be shown in the filter section in the application",
    ar: "إذا تم التحقق من هذا ، سيتم عرض هذه المواصفات من ضمن الفلاتر في التطبيق",
  },
  clearCacheConfirm: {
    en: "Are you sure you want to clear the cache?",
    ar: "هل أنت متأكد أنك تريد حذف الكاش؟",
  },
  clearingCache: {
    en: "Clearing cache...",
    ar: "جاري حذف الكاش...",
  },
  cacheCleared: {
    en: "Cache cleared successfully",
    ar: "تم حذف الكاش بنجاح",
  },
  sheet: {
    en: "Sheet",
    ar: "الشيت",
  },
  appName: {
    en: "App Name",
    ar: "اسم التطبيق",
  },
  savingSettings: {
    en: "Saving settings...",
    ar: "جاري حفظ الإعدادات...",
  },
  review: {
    en: "Review",
    ar: "التعليق",
  },
  social: {
    en: "Social",
    ar: "التواصل الاجتماعي",
  },
  aboutHint: {
    en: "About section will be shown in the footer of the website",
    ar: "سيتم عرض قسم عن في فوتر الموقع",
  },
  primaryColor: {
    en: "Primary Color",
    ar: "اللون الأساسي",
  },
  briefHint: {
    en: "Brief section will be shown in the footer of the website below the logo",
    ar: "سيتم عرض قسم الملخص في فوتر الموقع أسفل الشعار",
  },
  brief: {
    en: "Brief",
    ar: "الملخص",
  },
  inquiries: {
    en: "Inquiries",
    ar: "الاستفسارات",
  },
  inquiry: {
    en: "Inquiry",
    ar: "استفسار",
  },
  bannerNameDescription: {
    en: "This name will be used to identify the banner in the admin panel",
    ar: "سيتم استخدام هذا الاسم لتحديد البانر في لوحة التحكم",
  },
  sliderTitleDescription: {
    en: "If title is set, it will be displayed above the slider",
    ar: "إذا تم تعيين العنوان ، سيتم عرضه أعلى  الاسلايدر",
  },
  bannerTypeDescription: {
    en: "Setting banner type makes it easier to filter banners in the website/mobile app.",
    ar: "تعيين نوع البانر يجعل من السهل تصفية البانرات في الموقع / التطبيق المحمول.",
  },
  bannerTypeLinkDescription: {
    en: "Kindly note this works only on website, not app",
    ar: "يرجى ملاحظة أن هذا يعمل فقط على الموقع ، وليس التطبيق",
  },
  administratorsGroups: {
    en: "Administrators Groups",
    ar: "مجموعات المسؤولين",
  },
  placeholderImage: {
    en: "Placeholder Image",
    ar: "صورة الوضع الاحتياطي",
  },
  newsletterSubscriptions: {
    en: "Newsletter Subs",
    ar: "مشتركي النشرة",
  },
  placeholderImageHint: {
    en: "This image will be shown while the image is being loaded or in case of error",
    ar: "سيتم عرض هذه الصورة أثناء تحميل الصورة أو في حالة وجود خطأ",
  },
  bio: {
    en: "Bio",
    ar: "السيرة الذاتية",
  },
  about: {
    en: "About",
    ar: "عن",
  },
  settingsSaved: {
    en: "Settings saved successfully",
    ar: "تم حفظ الإعدادات بنجاح",
  },
  testimonials: {
    en: "Testimonials",
    ar: "الشهادات",
  },
  testimonial: {
    en: "Testimonial",
    ar: "شهادة",
  },
  metaTitleHint: {
    en: "If not set, it will be taken from the name field",
    ar: "إذا لم يتم تعيينه، سيتم الحصول عليه من حقل الاسم",
  },
  // metaDescriptionHint: {
  //   en: "If not set, it will be taken from the short description field",
  //   ar: "إذا لم يتم تعيينه، سيتم الحصول عليه من حقل الوصف المختصر",
  // },
  metaKeywordsHint: {
    en: "If not set, it will be taken from the name field, separate each keyword with a comma",
    ar: "إذا لم يتم تعيينه، سيتم الحصول عليه من حقل الاسم، افصل كل كلمة مفتاحية بفاصلة",
  },
  agents: {
    en: "Agents",
    ar: "الوكلاء",
  },
  developers: {
    en: "Developers",
    ar: "المطورين",
  },
  keywords: {
    en: "Keywords",
    ar: "الكلمات الدليلية",
  },
  property: {
    en: "Property",
    ar: "وحدة",
  },
  createItem: {
    en: "Create new :item",
    ar: "إنشاء :item جديد",
  },
  updateItem: {
    en: "Update :item",
    ar: "تحديث :item",
  },
  maxDiscountAmount: {
    en: "Max Discount Amount",
    ar: "أقصى مبلغ خصم",
  },
  maxDiscountAmountHint: {
    en: "This is the maximum amount that can be discounted from the total price if the discount type is set to percentage",
    ar: "هذا هو الحد الأقصى للمبلغ الذي يمكن خصمه من السعر الإجمالي إذا تم تعيين نوع الخصم على النسبة المئوية",
  },
  discountStartsAt: {
    en: "Discount Starts At",
    ar: "يبدأ الخصم في",
  },
  discountEndsAt: {
    en: "Discount Ends At",
    ar: "ينتهي الخصم في",
  },
  homeLayout: {
    en: "Home Layout",
    ar: "تخطيط الصفحة الرئيسية",
  },
  noRowsYet: {
    en: "No rows yet",
    ar: "لا توجد صفوف بعد",
  },
  addRow: {
    en: "Add Row",
    ar: "إضافة صف",
  },
  noData: {
    en: "No data found",
    ar: "لا يوجد بيانات",
  },
  deleteBulk: {
    en: "Delete (:count)",
    ar: "حذف (:count)",
  },
  confirmBulkRows: {
    en: "Are you sure you want to delete (:count) selected rows?",
    ar: "هل أنت متأكد من حذف (:count) الصفوف المحددة؟",
  },
  bulkDeleteHeading: {
    en: "Bulk Delete Confirm",
    ar: "تأكيد حذف متعدد",
  },
  cancelDelete: {
    en: "No don't delete it",
    ar: "لا، لا تحذفه",
  },
  confirmDelete: {
    en: "Yes, delete it",
    ar: "تأكيد الحذف",
  },
  singleDeleteHeading: {
    en: "Delete Confirm",
    ar: "تأكيد الحذف",
  },
  deleting: {
    en: "Deleting...",
    ar: "جاري الحذف...",
  },
  deletingInProgress: {
    en: "Deleting in progress...",
    ar: "جاري الحذف...",
  },
  success: {
    en: "Success",
    ar: "تمت العملية بنجاح",
  },
  deleteSuccess: {
    en: "Delete Operation has been done successfully",
    ar: "تمت عملية الحذف بنجاح",
  },
  deleteError: {
    en: "Error while deleting",
    ar: "حدث خطأ أثناء الحذف",
  },
  group: {
    en: "Group",
    ar: "مجموعة",
  },
  isAdmin: {
    en: "Is Admin",
    ar: "مدير",
  },
  isOwner: {
    en: "Is Owner",
    ar: "مالك",
  },
  isDeveloper: {
    en: "Is Developer",
    ar: "مطور",
  },
  deleteItem: {
    en: "Delete :item",
    ar: "حذف :item",
  },
  loading: {
    en: "Loading...",
    ar: "جار التحميل...",
  },
  advanced: {
    en: "Advanced",
    ar: "متقدم",
  },
  shipping: {
    en: "Shipping",
    ar: "الشحن",
  },
  couponProductsDescription: {
    en: "Select products that this coupon will be applied to, leave empty to apply to all products",
    ar: "حدد المنتجات التي سيتم تطبيق هذا القسيمة عليها، اتركها فارغة لتطبيقها على جميع المنتجات",
  },
  couponCategoriesDescription: {
    en: "Select categories that this coupon will be applied to, leave empty to apply to all categories",
    ar: "حدد الفئات التي سيتم تطبيق هذا القسيمة عليها، اتركها فارغة لتطبيقها على جميع الفئات",
  },
  couponBrandsDescription: {
    en: "Select brands that this coupon will be applied to, leave empty to apply to all brands",
    ar: "حدد العلامات التجارية التي سيتم تطبيق هذا القسيمة عليها، اتركها فارغة لتطبيقها على جميع العلامات التجارية",
  },
  couponCustomersDescription: {
    en: "Select customers that this coupon will be applied to, leave empty to apply to all customers",
    ar: "حدد العملاء الذين سيتم تطبيق هذا القسيمة عليهم، اتركها فارغة لتطبيقها على جميع العملاء",
  },
  login: {
    en: "Login",
    ar: "تسجيل الدخول",
  },
  confirmInput: {
    en: "Confirm :input",
    ar: "تأكيد كلمة المرور",
  },
  confirm: {
    en: "Confirm",
    ar: "تأكيد",
  },
  updateInfo: {
    en: "Update",
    ar: "تحديث البيانات",
  },
  phonNumber: {
    en: "Phone Number",
    ar: "رقم الهاتف",
  },
  confirmDeleteMessage: {
    en: "Are you sure you want to delete this record? This action is destructive and can not be restored.",
    ar: "هل أنت متأكد من أنك تريد حذف هذا السجل؟ هذا الإجراء غير قابل للتراجع عنه ولا يمكن إعادته.",
  },
  maxUsesPerCustomer: {
    en: "Max Uses Per Customer",
    ar: "الحد الأقصى للاستخدامات لكل عميل",
  },
  miOrderAmount: {
    en: "Minimum Order Amount",
    ar: "الحد الأدنى للطلب",
  },
  maxUses: {
    en: "Max Uses",
    ar: "الحد الأقصى للاستخدامات",
  },
  discount: {
    en: "Discount",
    ar: "الخصم",
  },
  resetPassword: {
    en: "Reset Password",
    ar: "إسترجاع كلمة المرور",
  },
  backToLogin: {
    en: "Back To Login",
    ar: "الرجوع لصفحة تسجيل الدخول",
  },
  direction: {
    en: "Direction",
    ar: "الإتجاه",
  },
  theme: {
    en: "Theme",
    ar: "التصميم",
  },
  light: {
    en: "Light",
    ar: "فاتح",
  },
  dark: {
    en: "Dark",
    ar: "داكن",
  },
  enterEmail: {
    en: "Enter your Phone Number Or Email",
    ar: "ادخل البريد الالكتروني او رقم الهاتف",
  },
  settings: {
    en: "Settings",
    ar: "الإعدادات",
  },
  accountSettings: {
    en: "Account Settings",
    ar: "إعدادات الحسآب",
  },
  ChangeAccount: {
    en: "Change Account",
    ar: "تغيير الحسآب",
  },
  logout: {
    en: "Logout",
    ar: "تسجيل الخروج",
  },
  logoutSuccessMessage: {
    en: "You have been logged out successfully",
    ar: "لقد تم تسجيل الخروج بنجاح",
  },
  language: {
    en: "Language",
    ar: "اللغة",
  },
  enterPass: {
    en: "Enter your password",
    ar: "ادخل كلمة المرور",
  },
  forgotPassword: {
    en: "Forgot Password?",
    ar: "نسيت كلمة المرور",
  },
  dashboard: {
    en: "Dashboard",
    ar: "الرئيسية",
  },
  somethingWentWrong: {
    en: "Something Went wrong, please try again later.",
    ar: "حدث خطأ ما, من فضلك حاول مرة أخرى في وقت لاحق.",
  },
  categories: {
    en: "Categories",
    ar: "الأقسام",
  },
  category: {
    en: "Category",
    ar: "القسم",
  },
  analysis: {
    en: "Analysis",
    ar: "التحليلات",
  },
  administrators: {
    en: "Administrators",
    ar: "المسؤولين",
  },
  administrator: {
    en: "Administrator",
    ar: "المسؤول",
  },
  errorHeading: {
    en: "Error!",
    ar: "خطأ!",
  },
  accessDenied: {
    en: "Access Denied!",
    ar: "غير مصرح لك بدخول هذه الصفحة!",
  },
  notFoundPage: {
    en: "Not Found Page",
    ar: "الصفحة المطلوبة غير موجودة",
  },
  minimizeScreen: {
    en: "Minimize Screen",
    ar: "تصغير الشاشة",
  },
  maximizeScreen: {
    en: "Maximize Screen",
    ar: "تكبير الشاشة",
  },
  read: {
    en: "Read",
    ar: "القراءة",
  },
  jobTitle: {
    en: "Job Title",
    ar: "المسمى الوظيفي",
  },
  staffLounge: {
    en: "Staff Lounge",
    ar: "موظفين الصالة",
  },
  last_name: {
    en: "Last Name",
    ar: "الإسم الثاني",
  },
  gym: {
    en: "Gym",
    ar: "الجيم الأساسي",
  },
  first_name: {
    en: "First Name",
    ar: "الإسم الأول",
  },
  userLounge: {
    en: "User Lounge",
    ar: "موظف صالة",
  },
  nationalID: {
    en: "National ID",
    ar: "الهوية الوطنية",
  },
  unreadMessages: {
    en: "Unread Messages",
    ar: "رسائل غير مقروءة",
  },
  youHave: {
    en: "You have",
    ar: "لديك",
  },
  clickOrDarg: {
    en: "Click Or darg and drop file to upload",
    ar: "اضغط او أسحب الملف",
  },
  dragAndDropToSort: {
    en: "Drag and drop to sort items",
    ar: "اسحب وأفلت لترتيب العناصر",
  },
  propertyModels: {
    en: "Property Models",
    ar: "نماذج العقارات",
  },
  nearByPlaces: {
    en: "Near By Places",
    ar: "الأماكن المجاورة",
  },
  propertyFurnishings: {
    en: "Property Furnishings",
    ar: "تجهيزات العقارات",
  },
  furnishing: {
    en: "Furnishing",
    ar: "نوع التجهيز",
  },
  model: {
    en: "Model",
    ar: "النموذج",
  },
  rooms: {
    en: "Rooms",
    ar: "الغرف",
  },
  filtersOff: {
    en: "Filters Off",
    ar: "اخفاء الفلتر",
  },
  filtersOn: {
    en: "Filters On",
    ar: "إظهار الفلتر",
  },
  hasSpecifications: {
    en: "Has Specifications",
    ar: "يحتوي على مواصفات",
  },
  outOfStock: {
    en: "Out Of Stock",
    ar: "غير متوفر",
  },
  contactMessages: {
    en: "Contact Messages",
    ar: "رسائل التواصل",
  },
  sender: {
    en: "Sender",
    ar: "المرسل",
  },
  enableReviews: {
    en: "Enable Reviews",
    ar: "تفعيل التقييمات",
  },
  autoPublishReviews: {
    en: "Auto Publish Reviews",
    ar: "نشر تلقائي للتقييمات",
  },
  blacklistKeywords: {
    en: "Blacklist Keywords",
    ar: "كلمات محظورة",
  },
  blacklistKeywordsHint: {
    en: "Enter keywords separated by comma, these keywords will be used to filter reviews and comments and replace any keyword with ****",
    ar: "أدخل الكلمات المفصولة بفاصلة ، وسيتم استخدام هذه الكلمات الرئيسية لتصفية التقييمات والتعليقات واستبدال أي كلمة رئيسية بـ ****",
  },
  nodes: {
    en: "Nodes",
    ar: "انودس",
  },
  node: {
    en: "Node",
    ar: "نود",
  },
  nodesDescription: {
    en: "Nodes are custom products page that you can create and customize to show specific products.",
    ar: "النود هي صفحات منتجات مخصصة يمكنك إنشاؤها وتخصيصها لعرض منتجات محددة.",
  },
  nodeSettings: {
    en: "Node Settings",
    ar: "إعدادات النود",
  },
  nodeLowStockDescription: {
    en: "If checked, Only products that have low stock will be shown.",
    ar: "إذا تم التحقق منه ، فسيتم عرض المنتجات التي تحتوي على مخزون منخفض فقط.",
  },
  nodeLimitDescription: {
    en: "If value is higher than 0, then only the number of products will be shown.",
    ar: "إذا كانت القيمة أعلى من 0 ، فسيتم عرض عدد المنتجات فقط.",
  },
  minPrice: {
    en: "Min Price",
    ar: "أقل سعر",
  },
  maxPrice: {
    en: "Max Price",
    ar: "أعلى سعر",
  },
  metaDescriptionHint: {
    en: "Meta description is a summary of your page content. It is used by search engines as a short summary to display in search results.",
    ar: "الوصف الفوقية هو ملخص لمحتوى صفحتك. يتم استخدامه من قبل محركات البحث كملخص قصير لعرضه في نتائج البحث.",
  },
  boolean: {
    en: "Yes/No",
    ar: "نعم/لا",
  },
  nodeProductsSetup: {
    en: "Node Products Setup",
    ar: "إعدادات منتجات النود",
  },
  nodeProductsExcept: {
    en: "Node Products Except",
    ar: "منتجات النود ما عدا",
  },
  age: {
    en: "Age",
    ar: "عمر",
  },
  copyRight: {
    en: "Copy Right Reversed",
    ar: "حقوق النشر محفوظة",
  },
  whatsappNumber: {
    en: "Whatsapp Number",
    ar: "رقم الواتساب",
  },
  switchToStyleMode: {
    en: "Switch to :mode Mode",
    ar: "تبديل إلى وضع :mode",
  },
  whatsappNumberHint: {
    en: "If added, then the floating whatsapp icon will appear on the website",
    ar: "إذا تم إضافته ، فسيظهر رمز الواتساب العائم على الموقع",
  },
  salePriceMustBeLessThanPrice: {
    en: "Sale price must be less than price",
    ar: "سعر البيع يجب أن يكون أقل من السعر",
  },
});
