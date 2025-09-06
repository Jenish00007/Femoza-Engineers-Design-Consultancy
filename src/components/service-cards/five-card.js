import './five-card.css';
import './four-card.css';
import { 
  FaCube, 
  FaClock, 
  FaDollarSign, 
  FaCalculator, 
  FaCogs, 
  FaBuilding, 
  FaUsers, 
  FaExchangeAlt, 
  FaIndustry, 
  FaDatabase, 
  FaWindowMaximize, 
  FaDraftingCompass, 
  FaHammer, 
  FaWrench, 
  FaMicrochip,
  FaEye,
  FaChartLine,
  FaRuler,
  FaLayerGroup,
  FaProjectDiagram,
  FaCog,
  FaFileAlt,
  FaTools,
  FaNetworkWired,
  FaVrCardboard
} from 'react-icons/fa';

// Function to get appropriate icon based on service name
const getServiceIcon = (serviceName) => {
  const name = serviceName.toLowerCase();
  
  // BIM Modeling Services
  if (name.includes('precision') || name.includes('bim') || name.includes('3d model')) return <FaCube />;
  if (name.includes('collaborate') || name.includes('coordination')) return <FaUsers />;
  if (name.includes('seamless') || name.includes('integrated')) return <FaLayerGroup />;
  if (name.includes('accurate') || name.includes('intelligent')) return <FaEye />;
  
  // 4D BIM Construction Simulation
  if (name.includes('visualize') || name.includes('time') || name.includes('simulation')) return <FaClock />;
  if (name.includes('schedule') || name.includes('sequence')) return <FaProjectDiagram />;
  if (name.includes('plan') || name.includes('timeline')) return <FaChartLine />;
  
  // 5D BIM Cost Estimation
  if (name.includes('cost') || name.includes('budget') || name.includes('financial')) return <FaDollarSign />;
  if (name.includes('estimation') || name.includes('forecasting')) return <FaCalculator />;
  if (name.includes('risk') || name.includes('control')) return <FaCog />;
  
  // Quantity Take-Off Services
  if (name.includes('quantity') || name.includes('takeoff') || name.includes('material')) return <FaRuler />;
  if (name.includes('automated') || name.includes('precision')) return <FaMicrochip />;
  if (name.includes('report') || name.includes('detailed')) return <FaFileAlt />;
  if (name.includes('digital') || name.includes('solution')) return <FaTools />;
  
  // BIM Content Creation
  if (name.includes('content') || name.includes('custom') || name.includes('family')) return <FaCogs />;
  if (name.includes('library') || name.includes('parametric')) return <FaLayerGroup />;
  if (name.includes('data-rich') || name.includes('intelligent')) return <FaDatabase />;
  
  // As-Built Modeling
  if (name.includes('as-built') || name.includes('real-world') || name.includes('existing')) return <FaBuilding />;
  if (name.includes('renovation') || name.includes('retrofit')) return <FaHammer />;
  if (name.includes('digital twin') || name.includes('smart')) return <FaMicrochip />;
  
  // BIM Outsourcing
  if (name.includes('outsourcing') || name.includes('scalable') || name.includes('expert')) return <FaUsers />;
  
  // CAD to BIM Conversion
  if (name.includes('cad') || name.includes('conversion') || name.includes('2d to 3d')) return <FaExchangeAlt />;
  if (name.includes('legacy') || name.includes('modern')) return <FaTools />;
  if (name.includes('enhanced') || name.includes('upgrade')) return <FaChartLine />;
  
  // BIM For Pre-Fabrication
  if (name.includes('fabrication') || name.includes('prefabrication') || name.includes('manufacturing')) return <FaIndustry />;
  if (name.includes('shop drawing') || name.includes('coordinated')) return <FaDraftingCompass />;
  if (name.includes('precision') || name.includes('next-level')) return <FaCog />;
  
  // COBie BIM Services
  if (name.includes('cobie') || name.includes('handover') || name.includes('facility')) return <FaDatabase />;
  if (name.includes('bridge') || name.includes('operation')) return <FaNetworkWired />;
  if (name.includes('simplified') || name.includes('compliant')) return <FaFileAlt />;
  
  // Facade BIM Services
  if (name.includes('facade') || name.includes('curtain') || name.includes('cladding')) return <FaWindowMaximize />;
  if (name.includes('glazing') || name.includes('element')) return <FaBuilding />;
  if (name.includes('clash') || name.includes('coordination')) return <FaWrench />;
  if (name.includes('shop drawing') || name.includes('generation')) return <FaDraftingCompass />;
  
  // Architectural BIM Services
  if (name.includes('architectural') || name.includes('drafting')) return <FaDraftingCompass />;
  if (name.includes('rendering') || name.includes('visualization')) return <FaEye />;
  if (name.includes('point cloud') || name.includes('scanning')) return <FaMicrochip />;
  
  // Structural BIM Services
  if (name.includes('rebar') || name.includes('reinforcement')) return <FaHammer />;
  if (name.includes('structural') || name.includes('steel')) return <FaBuilding />;
  if (name.includes('shop drawing') || name.includes('fabrication')) return <FaDraftingCompass />;
  
  // MEP BIM Services
  if (name.includes('mep') || name.includes('clash detection')) return <FaWrench />;
  if (name.includes('coordination') || name.includes('piping')) return <FaTools />;
  if (name.includes('mechanical') || name.includes('electrical') || name.includes('plumbing')) return <FaCog />;
  
  // Infra BIM Services
  if (name.includes('sensor') || name.includes('iot')) return <FaMicrochip />;
  if (name.includes('augmented reality') || name.includes('ar')) return <FaEye />;
  if (name.includes('virtual reality') || name.includes('vr')) return <FaVrCardboard />;
  if (name.includes('infrastructure') || name.includes('monitoring')) return <FaNetworkWired />;
  
  // Default fallback
  return <FaCube />;
};

const Cards = ({ project, cardsCount = 5 }) => {
    if (cardsCount === 5) {
        return (
            <div className="service-card">
                <div className="service-image-container">
                    <div className="service-icon">
                        {getServiceIcon(project.name)}
                    </div>
                </div>
                <div className="service-content">
                    <h3 className="service-title">{project.name}</h3>
                    <p className="service-description">{project.description}</p>
                </div>
            </div>
        )
    } else {
        return (
            <div className="femoza-service-card">
                <div className="femoza-service-image-container">
                    <div className="femoza-service-icon">
                        {getServiceIcon(project.name)}
                    </div>
                </div>
                <div className="femoza-service-content">
                    <h3 className="femoza-service-title">{project.name}</h3>
                    <p className="femoza-service-description">{project.description}</p>
                </div>
            </div>
        )
    };
};

export default Cards;