// src/app/models/product.model.ts

// تعريف الواجهة (Interface)
export interface Products {
  id: number; // معرف المنتج
  name: string; // اسم المنتج
  price: number; // السعر
  warranty: string; // الضمان
  description: string; // الوصف
  model: string; // الموديل
  type: string; // النوع
  capacity?: string; // السعة (اختياري)
  maxPressure?: string; // الضغط الأقصى (اختياري)
  walk?: string; // نظام المشي (اختياري)
  engine?: string; // المحرك (اختياري)
  electricMotor?: string; // المحرك الكهربائي (اختياري)
  controlValve?: string; // صمام التحكم (اختياري)
  workingHours?: string; // ساعات العمل (اختياري)
  location?: string; // الموقع (اختياري)
  madeIn?: string; // مكان التصنيع (اختياري)
  images: string[]; // صور المنتج
  features?: string[]; // الميزات الإضافية (اختياري)
}

// تعريف المصفوفة (Array) للمنتجات
export const products: Products[] = [
  {
    id: 1, // معرف المنتج
    name: 'ATLAS COPCO & 2004', // اسم المنتج
    price: 496000.00, // السعر
    warranty: '1 YEAR', // الضمان
    description: `"Perfgorazione con motore elettrico Slitte BMH 6814 Lunghezza slitte 5.200 mm Corsa utile 3.500 mm Drifters COP 1838 HF Automatic Control System"

A THREE-handed drilling one box machine capable of withstanding temperatures above 55 degrees Celsius, operating with advanced technology.`, // وصف المنتج
    model: '2004', // الموديل
    type: 'JUMBO', // النوع
    workingHours: '500 HOURS - It used to work periodically, (there is no project for it).', // ساعات العمل
    location: 'TURKEY', // الموقع
    madeIn: 'SWEDEN', 
    images: [ 
      'assets/images/prod1.avif',
      'assets/images/ATLAS COPCO2.avif',
      'assets/images/ATLAS COPCO3.avif'
    ],
    features: [ 
      'Electric motor drilling',
      'Slides BMH 6814',
      'Slide length 5,200 mm',
      'Useful stroke 3,500 mm',
      'Drifters COP 1838 HF',
      'Automatic Control System',
      'Three-handed drilling',
      'Operates in temperatures above 55°C'
    ]
  },
  {
    id: 2, // معرف المنتج
    name: 'ATLAS COPCO EPIROC T45 & 2022', // اسم المنتج
    price: 390000.00, // السعر
    warranty: '1 YEAR', // الضمان
    description: `"PowerROC T45
  
  Surface drill rig for quarrying and construction
  
  Hole diameter: 76–127 mm (3"–5")"
  
  A single-handed drilling machine capable of withstanding temperatures above 50 degrees Celsius, operating with advanced technology.`, // وصف المنتج
    model: '2022', // الموديل
    type: 'Digger', // النوع
    workingHours: '2000 HOURS', // ساعات العمل
    location: 'TURKEY', // الموقع
    madeIn: 'SWEDEN', // مكان التصنيع
    images: [ // صور المنتج
      'assets/images/prod2.avif',
      'assets/images/product2.avif',
    ],
    features: [ // الميزات الإضافية
      'Surface drill rig for quarrying and construction',
      'Hole diameter: 76–127 mm (3"–5")',
      'Single-handed drilling',
      'Operates in temperatures above 50°C',
      'Advanced technology'
    ]
  },
  {
    id: 3, // معرف المنتج
    name: 'BSP ROBO SHOTCRETE', // اسم المنتج
    price: 170000.00, // السعر
    warranty: '2 years or 2500 working hours', // الضمان
    description: `2 years or 2500 working hours (whichever is filled first) is under the manufacturer's standard warranty. Road, cost, accommodation and consular procedures for machines abroad belong to you. Except for the replacement of parts that are out of warranty, no service fee will be charged for manufacturing defects during the warranty period. 3 days of training will be given with delivery.`, // وصف المنتج
    model: '2024', // الموديل
    type: 'BSP ROBO 4*4 – 28 EK', // النوع
    capacity: '28 m3/h', // السعة
    maxPressure: '70 bar', // الضغط الأقصى
    walk: '4*4 hydrostatic walk, Crab steering system, Diesel engine', // نظام المشي
    engine: 'Diesel engine', // المحرك
    electricMotor: '45 Kw, 1500 revolutions/minute',
    location: 'TURKEY', // الموقع
    madeIn: 'SWEDEN', 
    controlValve: `Walvoil brand (Originating in Italy), DPC series, lever control, spring centered, detant, Slices with balance compensation, Proportional hydraulics are alerted, With load sensing valve`, // صمام التحكم
    images: [ // صور المنتج
      'assets/images/prod3.avif',
      'assets/images/product3.avif',
      'assets/images/product31.avif'
    ],
    features: [ // الميزات الإضافية
      'Concrete spraying capacity: 28 m3/h',
      'Maximum concrete pressure: 70 bar',
      '4*4 hydrostatic walk',
      'Crab steering system',
      'Diesel engine',
      'Electric motor: 45 Kw, 1500 rpm',
      'Control valve: Walvoil brand (Italy)',
      'DPC series, lever control, spring centered, detant',
      'Slices with balance compensation',
      'Proportional hydraulics with load sensing valve'
    ]
  },
  {
    id: 4, // معرف المنتج
    name: 'ATLAS COPCO & 2010', // اسم المنتج
    price: 325000.00, // السعر
    warranty: '1 YEAR', // الضمان
    description: `"Hours: Engine 98.1, Per (1) 756.5, Per (2) 404.3, Motor (1) 1109.2, Motor (2) 854.9
  
  75 HP – Deutz D914L04, Tier III"
  
  A Two-handed drilling one box machine capable of withstanding temperatures above 70 degrees Celsius, operating with advanced technology.`, // وصف المنتج
    model: '2010', // الموديل
    type: 'JUMBO', // النوع
    workingHours: '4,738 HOURS', // ساعات العمل
    location: 'UK', // الموقع
    madeIn: 'SWEDEN', // مكان التصنيع
    images: [ // صور المنتج
      'assets/images/prod4.avif',
      'assets/images/product4.avif',
      'assets/images/product41.avif'
    ],
    features: [ // الميزات الإضافية
      'Two-handed drilling',
      'Operates in temperatures above 70°C',
      'Advanced technology',
      'Engine: 75 HP – Deutz D914L04, Tier III',
      'Working hours: Engine 98.1, Per (1) 756.5, Per (2) 404.3, Motor (1) 1109.2, Motor (2) 854.9'
    ]
  },
  {
    id: 5, // معرف المنتج
    name: 'ATLAS COPCO & 2015', // اسم المنتج
    price: 490000.00, // السعر
    warranty: '1 YEAR', // الضمان
    description: `Boom extension, max: 1600 mm | Feed extension, max: 1800 mm | Feed roll-over: 360˚ | Lifting angle, max: + 70˚/-30˚ | Parallel holding: Complete
  
  A THREE-handed drilling one box machine capable of withstanding temperatures above 70 degrees Celsius, operating with advanced technology.`, // وصف المنتج
    model: '2015', // الموديل
    type: 'JUMBO', // النوع
    workingHours: '1,876 HOURS', // ساعات العمل
    location: 'UK & TURKEY', // الموقع
    madeIn: 'SWEDEN', // مكان التصنيع
    images: [ // صور المنتج
      'assets/images/prod5.avif',
      'assets/images/product5.avif'
    ],
    features: [ // الميزات الإضافية
      'Boom extension, max: 1600 mm',
      'Feed extension, max: 1800 mm',
      'Feed roll-over: 360˚',
      'Lifting angle, max: + 70˚/-30˚',
      'Parallel holding: Complete',
      'Three-handed drilling',
      'Operates in temperatures above 70°C',
      'Advanced technology'
    ]
  },{
    id: 6, // معرف المنتج
    name: 'ATLAS COPCO & 2015', // اسم المنتج
    price: 490000.00, // السعر
    warranty: '1 YEAR', // الضمان
    description: `Boom extension, max: 1600 mm | Feed extension, max: 1800 mm | Feed roll-over: 360˚ | Lifting angle, max: + 70˚/-30˚ | Parallel holding: Complete
  
  A THREE-handed drilling one box machine capable of withstanding temperatures above 70 degrees Celsius, operating with advanced technology.`, // وصف المنتج
    model: '2015', // الموديل
    type: 'JUMBO', // النوع
    workingHours: '1,876 HOURS', // ساعات العمل
    location: 'UK & TURKEY', // الموقع
    madeIn: 'SWEDEN', // مكان التصنيع
    images: [ // صور المنتج
      'assets/images/prod8.avif',
      'assets/images/product6.avif'
    ],
    features: [ // الميزات الإضافية
      'Boom extension, max: 1600 mm',
      'Feed extension, max: 1800 mm',
      'Feed roll-over: 360˚',
      'Lifting angle, max: + 70˚/-30˚',
      'Parallel holding: Complete',
      'Three-handed drilling',
      'Operates in temperatures above 70°C',
      'Advanced technology'
    ]
  },
  {
    id: 7, // معرف المنتج
    name: 'ATLAS COPCO & 2016', // اسم المنتج
    price: 500000.00, // السعر
    warranty: '1 YEAR', // الضمان
    description: `The Boomer XL3 D is a modern hydraulic face-drilling rig for large sized tunnels and mine production with cross sections up to 178 m2. The rig is equipped with a direct control system (DCS) that is robust and reliable.
  
  A THREE-handed drilling one box machine capable of withstanding temperatures above 70 degrees Celsius, operating with advanced technology.`, // وصف المنتج
    model: '2016', // الموديل
    type: 'JUMBO', // النوع
    workingHours: '3,337 HOURS', // ساعات العمل
    location: 'UK', // الموقع
    madeIn: 'SWEDEN', // مكان التصنيع
    images: [ // صور المنتج
      'assets/images/produ7.avif',
      'assets/images/product7.avif'
    ],
    features: [ // الميزات الإضافية
      'Hydraulic face-drilling rig',
      'Suitable for large tunnels and mine production',
      'Cross sections up to 178 m2',
      'Direct control system (DCS)',
      'Robust and reliable',
      'Three-handed drilling',
      'Operates in temperatures above 70°C',
      'Advanced technology'
    ]
  },
  {
  id: 8, // معرف المنتج
    name: 'JUMBO 2 ARMS FURUKAWA', // اسم المنتج
    price: 160000.00, // السعر
    warranty: '1 YEAR', // الضمان
    description: `The Boomer XL3 D is a modern hydraulic face-drilling rig for large sized tunnels and mine production with cross sections up to 178 m2. The rig is equipped with a direct control system (DCS) that is robust and reliable.
  
  A THREE-handed drilling one box machine capable of withstanding temperatures above 70 degrees Celsius, operating with advanced technology.`, // وصف المنتج
    model: '2006', // الموديل
    type: 'JUMBO', // النوع
    workingHours: '3,337 HOURS', // ساعات العمل
    location: 'UK', // الموقع
    madeIn: 'SWEDEN', // مكان التصنيع
    images: [ // صور المنتج
      'assets/images/product9.avif',
      'assets/images/prod9.avif'
    ],
    features: [ // الميزات الإضافية
      'Hydraulic face-drilling rig',
      'Suitable for large tunnels and mine production',
      'Cross sections up to 178 m2',
      'Direct control system (DCS)',
      'Robust and reliable',
      'Three-handed drilling',
      'Operates in temperatures above 70°C',
      'Advanced technology'
    ]
  }
];