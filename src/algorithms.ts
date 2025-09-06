/**
 * Advanced string similarity algorithms for name matching
 */

// Levenshtein distance algorithm for calculating edit distance
export function levenshteinDistance(str1: string, str2: string): number {
  const matrix = Array(str2.length + 1).fill(null).map(() => Array(str1.length + 1).fill(null));
  
  for (let i = 0; i <= str1.length; i++) {
    matrix[0][i] = i;
  }
  
  for (let j = 0; j <= str2.length; j++) {
    matrix[j][0] = j;
  }
  
  for (let j = 1; j <= str2.length; j++) {
    for (let i = 1; i <= str1.length; i++) {
      const indicator = str1[i - 1] === str2[j - 1] ? 0 : 1;
      matrix[j][i] = Math.min(
        matrix[j][i - 1] + 1, // insertion
        matrix[j - 1][i] + 1, // deletion
        matrix[j - 1][i - 1] + indicator // substitution
      );
    }
  }
  
  return matrix[str2.length][str1.length];
}

// Calculate similarity score as percentage (0-100)
export function calculateSimilarity(str1: string, str2: string): number {
  const maxLength = Math.max(str1.length, str2.length);
  if (maxLength === 0) return 100;
  
  const distance = levenshteinDistance(str1.toLowerCase(), str2.toLowerCase());
  return Math.round(((maxLength - distance) / maxLength) * 100);
}

// Jaro-Winkler similarity (alternative algorithm)
export function jaroWinklerSimilarity(str1: string, str2: string): number {
  const s1 = str1.toLowerCase();
  const s2 = str2.toLowerCase();
  
  if (s1 === s2) return 1.0;
  
  const len1 = s1.length;
  const len2 = s2.length;
  const maxDistance = Math.floor(Math.max(len1, len2) / 2) - 1;
  
  const match1 = new Array(len1).fill(false);
  const match2 = new Array(len2).fill(false);
  
  let matches = 0;
  let transpositions = 0;
  
  // Find matches
  for (let i = 0; i < len1; i++) {
    const start = Math.max(0, i - maxDistance);
    const end = Math.min(i + maxDistance + 1, len2);
    
    for (let j = start; j < end; j++) {
      if (match2[j] || s1[i] !== s2[j]) continue;
      match1[i] = match2[j] = true;
      matches++;
      break;
    }
  }
  
  if (matches === 0) return 0;
  
  // Find transpositions
  let k = 0;
  for (let i = 0; i < len1; i++) {
    if (!match1[i]) continue;
    while (!match2[k]) k++;
    if (s1[i] !== s2[k]) transpositions++;
    k++;
  }
  
  const jaro = (matches / len1 + matches / len2 + (matches - transpositions / 2) / matches) / 3;
  
  // Winkler modification
  let prefix = 0;
  for (let i = 0; i < Math.min(len1, len2, 4); i++) {
    if (s1[i] === s2[i]) prefix++;
    else break;
  }
  
  return Math.round((jaro + 0.1 * prefix * (1 - jaro)) * 100);
}

// Soundex algorithm for phonetic matching
export function soundex(str: string): string {
  const code = str.toUpperCase().charAt(0);
  const consonants = str.toUpperCase().slice(1).replace(/[AEIOUYHW]/g, '');
  
  const mapping: { [key: string]: string } = {
    'BFPV': '1',
    'CGJKQSXZ': '2',
    'DT': '3',
    'L': '4',
    'MN': '5',
    'R': '6'
  };
  
  let soundexCode = code;
  for (const char of consonants) {
    for (const [chars, digit] of Object.entries(mapping)) {
      if (chars.includes(char)) {
        soundexCode += digit;
        break;
      }
    }
  }
  
  // Remove duplicates and pad/truncate to 4 characters
  soundexCode = soundexCode.replace(/(.)\1+/g, '$1');
  return (soundexCode + '000').slice(0, 4);
}

// Combined similarity score using multiple algorithms
export function combinedSimilarity(str1: string, str2: string): number {
  const levenshtein = calculateSimilarity(str1, str2);
  const jaroWinkler = jaroWinklerSimilarity(str1, str2);
  const soundexMatch = soundex(str1) === soundex(str2) ? 20 : 0;
  
  // Weighted combination
  return Math.round((levenshtein * 0.6 + jaroWinkler * 0.3 + soundexMatch * 0.1));
}