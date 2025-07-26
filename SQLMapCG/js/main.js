import { addTargetOptions } from './components/targetOptions.js';
import { addCrawlingOptions } from './components/crawlingOptions.js';
import { addConnectionOptions } from './components/connectionOptions.js';
import { addOptimizationOptions } from './components/optimizationOptions.js';
import { addDetectionOptions } from './components/detectionOptions.js';
import { addTechniqueOptions } from './components/techniqueOptions.js';
import { addEnumerationOptions } from './components/enumerationOptions.js';
import { addAdvancedOptions } from './components/advancedOptions.js';
import { toggleTheme, initTheme } from './theme.js';

// Initialize event listeners when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize theme
    initTheme();

    // Add event listeners
    document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
    document.getElementById('generate-btn').addEventListener('click', generateCommand);
    document.getElementById('copy-btn').addEventListener('click', copyCommand);

    // Handle incompatible options
    document.getElementById('all').addEventListener('change', function() {
        const enumOptions = [
            'banner', 'current-user', 'current-db', 'passwords',
            'dbs', 'tables', 'columns', 'schema', 'dump'
        ];
        enumOptions.forEach(opt => {
            const el = document.getElementById(opt);
            el.disabled = this.checked;
            if (this.checked) el.checked = false;
        });
    });
});

function generateCommand() {
    let command = 'sqlmap';
    
    command = addTargetOptions(command);
    command = addCrawlingOptions(command);
    command = addConnectionOptions(command);
    command = addOptimizationOptions(command);
    command = addDetectionOptions(command);
    command = addTechniqueOptions(command);
    command = addEnumerationOptions(command);
    command = addAdvancedOptions(command);
    
    document.getElementById('output').textContent = command;
}

function copyCommand() {
    const output = document.getElementById('output');
    navigator.clipboard.writeText(output.textContent)
        .then(() => {
            const btn = document.getElementById('copy-btn');
            btn.textContent = 'Copied!';
            setTimeout(() => btn.textContent = 'Copy Command', 2000);
        })
        .catch(err => console.error('Failed to copy:', err));
}