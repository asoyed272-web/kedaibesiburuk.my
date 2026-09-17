import aluminiumImg from '../assets/images/aluminium_scrap_1789460188668.jpg';
import copperBrassImg from '../assets/images/copper_brass_scrap_1789460277345.jpg';
import ironSteelImg from '../assets/images/iron_steel_scrap_1789460296574.jpg';
import metalPipingImg from '../assets/images/metal_piping_scrap_1789460317332.jpg';
import metalFabImg from '../assets/images/metal_fab_scrap_1789460343291.jpg';
import metalStructuralImg from '../assets/images/structural_metal_1789460363566.jpg';
import mixedMetalImg from '../assets/images/mixed_metal_scrap_1789460384204.jpg';
import motorsPowerImg from '../assets/images/motors_power_scrap_1789460400391.jpg';
import cablesWiringImg from '../assets/images/cables_wiring_scrap_1789460421127.jpg';
import hvacCoolingImg from '../assets/images/hvac_cooling_scrap_1789460441141.jpg';
import hvacHeavyImg from '../assets/images/hvac_heavy_scrap_1789460460007.jpg';
import elecIndustrialImg from '../assets/images/elec_industrial_1789460479948.jpg';
import electronicsItImg from '../assets/images/electronics_it_1789460501337.jpg';
import officeElectronicsImg from '../assets/images/office_electronics_1789460520108.jpg';
import appliancesMotorsImg from '../assets/images/appliance_scrap_1789460537795.jpg';
import containersMetalImg from '../assets/images/metal_drums_scrap_1789460556873.jpg';
import machineryPlantImg from '../assets/images/machinery_scrap_1789460577162.jpg';
import structuralFurnitureImg from '../assets/images/metal_furniture_scrap_1789460597053.jpg';
import electricalScrapImg from '../assets/images/electrical_scrap_1789460615774.jpg';
import electronicWasteImg from '../assets/images/ewaste_pcb_scrap_1789460632043.jpg';
import generalScrapImg from '../assets/images/general_scrap_yard_1789460653358.jpg';
import glassContainersImg from '../assets/images/glass_recycling_1789460672006.jpg';
import cansContainersImg from '../assets/images/cans_containers_1789460691224.jpg';

export interface ScrapCategory {
  id: string;
  name: {
    en: string;
    ms: string;
  };
  description: {
    en: string;
    ms: string;
  };
  image: string;
  iconName: string;
  group: 'metals' | 'electrical-hvac' | 'electronics-it' | 'machinery-structural' | 'containers-general';
}

export const SCRAP_CATEGORIES: ScrapCategory[] = [
  {
    id: 'aluminium',
    name: {
      en: 'Aluminium',
      ms: 'Aluminium',
    },
    description: {
      en: 'Aluminium sheets, frames, profiles and other aluminium scrap.',
      ms: 'Kepingan, bingkai, profil aluminium dan barangan lusuh aluminium lain.',
    },
    image: aluminiumImg,
    iconName: 'CircleDot',
    group: 'metals',
  },
  {
    id: 'copper-brass',
    name: {
      en: 'Copper & Brass',
      ms: 'Tembaga & Loyang',
    },
    description: {
      en: 'Copper and brass materials, fittings and recyclable components.',
      ms: 'Bahan tembaga dan loyang, penyambung paip dan komponen kitar semula.',
    },
    image: copperBrassImg,
    iconName: 'Sparkles',
    group: 'metals',
  },
  {
    id: 'iron-steel',
    name: {
      en: 'Iron & Steel',
      ms: 'Besi & Keluli',
    },
    description: {
      en: 'Ferrous metal including iron, steel and related scrap.',
      ms: 'Logam ferus termasuk besi, keluli dan barangan lusuh berkaitan.',
    },
    image: ironSteelImg,
    iconName: 'Anvil',
    group: 'metals',
  },
  {
    id: 'metal-piping',
    name: {
      en: 'Metal & Piping',
      ms: 'Logam & Perpaipan',
    },
    description: {
      en: 'Metal pipes, tubes, fittings and related materials.',
      ms: 'Paip logam, tiub, pemasangan penyambung dan bahan berkaitan.',
    },
    image: metalPipingImg,
    iconName: 'Wrench',
    group: 'metals',
  },
  {
    id: 'metal-fabrication',
    name: {
      en: 'Metal & Fabrication',
      ms: 'Logam & Fabrikasi',
    },
    description: {
      en: 'Fabricated metal pieces, offcuts and workshop scrap.',
      ms: 'Kepingan logam fabrikasi, sisa potongan bengkel dan sisa pemotongan.',
    },
    image: metalFabImg,
    iconName: 'Hammer',
    group: 'metals',
  },
  {
    id: 'metal-structural',
    name: {
      en: 'Metal & Structural',
      ms: 'Logam & Struktur',
    },
    description: {
      en: 'Metal beams, frames, supports and structural components.',
      ms: 'Rasuk logam, bingkai keluli, sokongan dan komponen berstruktur.',
    },
    image: metalStructuralImg,
    iconName: 'Building2',
    group: 'metals',
  },
  {
    id: 'mixed-metal',
    name: {
      en: 'Mixed Metal',
      ms: 'Campuran Logam',
    },
    description: {
      en: 'Mixed ferrous and non-ferrous metal scrap.',
      ms: 'Campuran sisa logam ferus dan bukan ferus pelbagai jenis.',
    },
    image: mixedMetalImg,
    iconName: 'Boxes',
    group: 'metals',
  },
  {
    id: 'motors-power',
    name: {
      en: 'Motors & Power',
      ms: 'Motor & Penjana Kuasa',
    },
    description: {
      en: 'Electric motors, generators and power-related equipment.',
      ms: 'Motor elektrik, penjana kuasa dan peralatan berkaitan tenaga elektrik.',
    },
    image: motorsPowerImg,
    iconName: 'Zap',
    group: 'electrical-hvac',
  },
  {
    id: 'cables-wiring',
    name: {
      en: 'Cables & Wiring',
      ms: 'Kabel & Pendawaian',
    },
    description: {
      en: 'Copper/aluminium cables, wires and electrical wiring.',
      ms: 'Kabel tembaga/aluminium, wayar teras dan pendawaian elektrik.',
    },
    image: cablesWiringImg,
    iconName: 'Cable',
    group: 'electrical-hvac',
  },
  {
    id: 'hvac-cooling',
    name: {
      en: 'HVAC & Cooling',
      ms: 'HVAC & Penyejukan',
    },
    description: {
      en: 'Air-conditioning and cooling equipment and components.',
      ms: 'Peralatan penyaman udara, unit penyejuk dan komponen berkaitan.',
    },
    image: hvacCoolingImg,
    iconName: 'Wind',
    group: 'electrical-hvac',
  },
  {
    id: 'hvac-heavy-parts',
    name: {
      en: 'HVAC & Heavy Parts',
      ms: 'HVAC & Bahagian Berat',
    },
    description: {
      en: 'Heavy HVAC units, compressors and related components.',
      ms: 'Unit HVAC berat, pemampat industri dan komponen mekanikal berkaitan.',
    },
    image: hvacHeavyImg,
    iconName: 'Cog',
    group: 'electrical-hvac',
  },
  {
    id: 'electrical-industrial',
    name: {
      en: 'Electrical & Industrial',
      ms: 'Elektrik & Industri',
    },
    description: {
      en: 'Industrial electrical equipment, components and materials.',
      ms: 'Peralatan elektrik industri, papan agihan kuasa dan komponen kawalan.',
    },
    image: elecIndustrialImg,
    iconName: 'Power',
    group: 'electrical-hvac',
  },
  {
    id: 'electronics-it',
    name: {
      en: 'Electronics & IT',
      ms: 'Elektronik & IT',
    },
    description: {
      en: 'Computers, servers, networking equipment and electronic components.',
      ms: 'Komputer, pelayan rangkaian, peralatan IT dan komponen elektronik.',
    },
    image: electronicsItImg,
    iconName: 'Server',
    group: 'electronics-it',
  },
  {
    id: 'office-electronics',
    name: {
      en: 'Office Electronics',
      ms: 'Elektronik Pejabat',
    },
    description: {
      en: 'Printers, monitors, office equipment and related electronics.',
      ms: 'Pencetak, monitor, mesin fotostat dan peralatan elektronik pejabat.',
    },
    image: officeElectronicsImg,
    iconName: 'Printer',
    group: 'electronics-it',
  },
  {
    id: 'appliances-motors',
    name: {
      en: 'Appliances & Motors',
      ms: 'Perkakas & Motor',
    },
    description: {
      en: 'Household appliances, motors and related recyclable equipment.',
      ms: 'Perkakas elektrik rumah, motor mesin dan peralatan kitar semula berkaitan.',
    },
    image: appliancesMotorsImg,
    iconName: 'Tv',
    group: 'electrical-hvac',
  },
  {
    id: 'containers-metal',
    name: {
      en: 'Containers & Metal',
      ms: 'Bekas & Logam',
    },
    description: {
      en: 'Metal containers, drums and recyclable metal vessels.',
      ms: 'Bekas logam, tong dram keluli dan bekas simpanan logam kitar semula.',
    },
    image: containersMetalImg,
    iconName: 'Archive',
    group: 'containers-general',
  },
  {
    id: 'machinery-plant',
    name: {
      en: 'Machinery & Plant',
      ms: 'Jentera & Loji',
    },
    description: {
      en: 'Industrial machinery, equipment and plant components.',
      ms: 'Mesin perindustrian, peralatan kilang dan komponen jentera berat.',
    },
    image: machineryPlantImg,
    iconName: 'Factory',
    group: 'machinery-structural',
  },
  {
    id: 'structural-furniture',
    name: {
      en: 'Structural & Furniture',
      ms: 'Struktur & Perabot',
    },
    description: {
      en: 'Metal furniture, frames and structural metal items.',
      ms: 'Perabot logam, kerusi meja besi, rak dan barangan berstruktur.',
    },
    image: structuralFurnitureImg,
    iconName: 'Armchair',
    group: 'machinery-structural',
  },
  {
    id: 'electrical-scrap',
    name: {
      en: 'Electrical Scrap',
      ms: 'Sisa Elektrik',
    },
    description: {
      en: 'Electrical components, equipment and recyclable electrical materials.',
      ms: 'Komponen elektrik, fius, pemutus litar dan bahan elektrik kitar semula.',
    },
    image: electricalScrapImg,
    iconName: 'Plug',
    group: 'electrical-hvac',
  },
  {
    id: 'electronic-waste',
    name: {
      en: 'Electronic Waste',
      ms: 'E-Sisa (Sisa Elektronik)',
    },
    description: {
      en: 'Unwanted electronic devices, components and e-waste.',
      ms: 'Peranti elektronik terpakai, papan litar bercetak dan sisa e-waste.',
    },
    image: electronicWasteImg,
    iconName: 'Cpu',
    group: 'electronics-it',
  },
  {
    id: 'general-scrap',
    name: {
      en: 'General Scrap',
      ms: 'Barangan Lusuh Umum',
    },
    description: {
      en: 'Other recyclable scrap materials that do not fit another category.',
      ms: 'Barangan lusuh kitar semula lain yang tidak tergolong dalam kategori tertentu.',
    },
    image: generalScrapImg,
    iconName: 'HelpCircle',
    group: 'containers-general',
  },
  {
    id: 'glass-containers',
    name: {
      en: 'Glass & Containers',
      ms: 'Kaca & Bekas',
    },
    description: {
      en: 'Glass containers, bottles and recyclable glass materials.',
      ms: 'Bekas kaca, botol minuman dan bahan kaca yang boleh dikitar semula.',
    },
    image: glassContainersImg,
    iconName: 'Wine',
    group: 'containers-general',
  },
  {
    id: 'cans-containers',
    name: {
      en: 'Cans & Containers',
      ms: 'Tin & Bekas Logam',
    },
    description: {
      en: 'Metal cans, containers and similar recyclable items.',
      ms: 'Tin minuman aluminium, tin makanan dan bekas logam kitar semula.',
    },
    image: cansContainersImg,
    iconName: 'Disc3',
    group: 'containers-general',
  },
];

export function getCategoryById(id: string): ScrapCategory | undefined {
  return SCRAP_CATEGORIES.find((cat) => cat.id === id);
}
