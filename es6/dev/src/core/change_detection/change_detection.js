import { IterableDiffers } from './differs/iterable_differs';
import { DefaultIterableDifferFactory } from './differs/default_iterable_differ';
import { KeyValueDiffers } from './differs/keyvalue_differs';
import { DefaultKeyValueDifferFactory } from './differs/default_keyvalue_differ';
import { CONST_EXPR } from 'angular2/src/facade/lang';
export { DefaultKeyValueDifferFactory, KeyValueChangeRecord } from './differs/default_keyvalue_differ';
export { DefaultIterableDifferFactory, CollectionChangeRecord } from './differs/default_iterable_differ';
export { ChangeDetectionStrategy, CHANGE_DETECTION_STRATEGY_VALUES, ChangeDetectorState, CHANGE_DETECTOR_STATE_VALUES, isDefaultChangeDetectionStrategy } from './constants';
export { ChangeDetectorRef } from './change_detector_ref';
export { IterableDiffers } from './differs/iterable_differs';
export { KeyValueDiffers } from './differs/keyvalue_differs';
export { WrappedValue, ValueUnwrapper, SimpleChange, devModeEqual, looseIdentical, uninitialized } from './change_detection_util';
/**
 * Structural diffing for `Object`s and `Map`s.
 */
export const keyValDiff = CONST_EXPR([CONST_EXPR(new DefaultKeyValueDifferFactory())]);
/**
 * Structural diffing for `Iterable` types such as `Array`s.
 */
export const iterableDiff = CONST_EXPR([CONST_EXPR(new DefaultIterableDifferFactory())]);
export const defaultIterableDiffers = CONST_EXPR(new IterableDiffers(iterableDiff));
export const defaultKeyValueDiffers = CONST_EXPR(new KeyValueDiffers(keyValDiff));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlX2RldGVjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpZmZpbmdfcGx1Z2luX3dyYXBwZXItb3V0cHV0X3BhdGgtd1dSU1ZkUFAudG1wL2FuZ3VsYXIyL3NyYy9jb3JlL2NoYW5nZV9kZXRlY3Rpb24vY2hhbmdlX2RldGVjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiT0FBTyxFQUFDLGVBQWUsRUFBd0IsTUFBTSw0QkFBNEI7T0FDMUUsRUFBQyw0QkFBNEIsRUFBQyxNQUFNLG1DQUFtQztPQUN2RSxFQUFDLGVBQWUsRUFBd0IsTUFBTSw0QkFBNEI7T0FDMUUsRUFDTCw0QkFBNEIsRUFFN0IsTUFBTSxtQ0FBbUM7T0FDbkMsRUFBQyxVQUFVLEVBQUMsTUFBTSwwQkFBMEI7QUFFbkQsU0FDRSw0QkFBNEIsRUFDNUIsb0JBQW9CLFFBQ2YsbUNBQW1DLENBQUM7QUFDM0MsU0FDRSw0QkFBNEIsRUFDNUIsc0JBQXNCLFFBQ2pCLG1DQUFtQyxDQUFDO0FBRTNDLFNBQ0UsdUJBQXVCLEVBQ3ZCLGdDQUFnQyxFQUNoQyxtQkFBbUIsRUFDbkIsNEJBQTRCLEVBQzVCLGdDQUFnQyxRQUMzQixhQUFhLENBQUM7QUFDckIsU0FBUSxpQkFBaUIsUUFBTyx1QkFBdUIsQ0FBQztBQUN4RCxTQUNFLGVBQWUsUUFJViw0QkFBNEIsQ0FBQztBQUNwQyxTQUFRLGVBQWUsUUFBOEMsNEJBQTRCLENBQUM7QUFHbEcsU0FDRSxZQUFZLEVBQ1osY0FBYyxFQUNkLFlBQVksRUFDWixZQUFZLEVBQ1osY0FBYyxFQUNkLGFBQWEsUUFDUix5QkFBeUIsQ0FBQztBQUVqQzs7R0FFRztBQUNILE9BQU8sTUFBTSxVQUFVLEdBQ25CLFVBQVUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLDRCQUE0QixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFFakU7O0dBRUc7QUFDSCxPQUFPLE1BQU0sWUFBWSxHQUNyQixVQUFVLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSw0QkFBNEIsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBRWpFLE9BQU8sTUFBTSxzQkFBc0IsR0FBRyxVQUFVLENBQUMsSUFBSSxlQUFlLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztBQUVwRixPQUFPLE1BQU0sc0JBQXNCLEdBQUcsVUFBVSxDQUFDLElBQUksZUFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0l0ZXJhYmxlRGlmZmVycywgSXRlcmFibGVEaWZmZXJGYWN0b3J5fSBmcm9tICcuL2RpZmZlcnMvaXRlcmFibGVfZGlmZmVycyc7XG5pbXBvcnQge0RlZmF1bHRJdGVyYWJsZURpZmZlckZhY3Rvcnl9IGZyb20gJy4vZGlmZmVycy9kZWZhdWx0X2l0ZXJhYmxlX2RpZmZlcic7XG5pbXBvcnQge0tleVZhbHVlRGlmZmVycywgS2V5VmFsdWVEaWZmZXJGYWN0b3J5fSBmcm9tICcuL2RpZmZlcnMva2V5dmFsdWVfZGlmZmVycyc7XG5pbXBvcnQge1xuICBEZWZhdWx0S2V5VmFsdWVEaWZmZXJGYWN0b3J5LFxuICBLZXlWYWx1ZUNoYW5nZVJlY29yZFxufSBmcm9tICcuL2RpZmZlcnMvZGVmYXVsdF9rZXl2YWx1ZV9kaWZmZXInO1xuaW1wb3J0IHtDT05TVF9FWFBSfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2xhbmcnO1xuXG5leHBvcnQge1xuICBEZWZhdWx0S2V5VmFsdWVEaWZmZXJGYWN0b3J5LFxuICBLZXlWYWx1ZUNoYW5nZVJlY29yZFxufSBmcm9tICcuL2RpZmZlcnMvZGVmYXVsdF9rZXl2YWx1ZV9kaWZmZXInO1xuZXhwb3J0IHtcbiAgRGVmYXVsdEl0ZXJhYmxlRGlmZmVyRmFjdG9yeSxcbiAgQ29sbGVjdGlvbkNoYW5nZVJlY29yZFxufSBmcm9tICcuL2RpZmZlcnMvZGVmYXVsdF9pdGVyYWJsZV9kaWZmZXInO1xuXG5leHBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ0hBTkdFX0RFVEVDVElPTl9TVFJBVEVHWV9WQUxVRVMsXG4gIENoYW5nZURldGVjdG9yU3RhdGUsXG4gIENIQU5HRV9ERVRFQ1RPUl9TVEFURV9WQUxVRVMsXG4gIGlzRGVmYXVsdENoYW5nZURldGVjdGlvblN0cmF0ZWd5XG59IGZyb20gJy4vY29uc3RhbnRzJztcbmV4cG9ydCB7Q2hhbmdlRGV0ZWN0b3JSZWZ9IGZyb20gJy4vY2hhbmdlX2RldGVjdG9yX3JlZic7XG5leHBvcnQge1xuICBJdGVyYWJsZURpZmZlcnMsXG4gIEl0ZXJhYmxlRGlmZmVyLFxuICBJdGVyYWJsZURpZmZlckZhY3RvcnksXG4gIFRyYWNrQnlGblxufSBmcm9tICcuL2RpZmZlcnMvaXRlcmFibGVfZGlmZmVycyc7XG5leHBvcnQge0tleVZhbHVlRGlmZmVycywgS2V5VmFsdWVEaWZmZXIsIEtleVZhbHVlRGlmZmVyRmFjdG9yeX0gZnJvbSAnLi9kaWZmZXJzL2tleXZhbHVlX2RpZmZlcnMnO1xuZXhwb3J0IHtQaXBlVHJhbnNmb3JtfSBmcm9tICcuL3BpcGVfdHJhbnNmb3JtJztcblxuZXhwb3J0IHtcbiAgV3JhcHBlZFZhbHVlLFxuICBWYWx1ZVVud3JhcHBlcixcbiAgU2ltcGxlQ2hhbmdlLFxuICBkZXZNb2RlRXF1YWwsXG4gIGxvb3NlSWRlbnRpY2FsLFxuICB1bmluaXRpYWxpemVkXG59IGZyb20gJy4vY2hhbmdlX2RldGVjdGlvbl91dGlsJztcblxuLyoqXG4gKiBTdHJ1Y3R1cmFsIGRpZmZpbmcgZm9yIGBPYmplY3RgcyBhbmQgYE1hcGBzLlxuICovXG5leHBvcnQgY29uc3Qga2V5VmFsRGlmZjogS2V5VmFsdWVEaWZmZXJGYWN0b3J5W10gPVxuICAgIENPTlNUX0VYUFIoW0NPTlNUX0VYUFIobmV3IERlZmF1bHRLZXlWYWx1ZURpZmZlckZhY3RvcnkoKSldKTtcblxuLyoqXG4gKiBTdHJ1Y3R1cmFsIGRpZmZpbmcgZm9yIGBJdGVyYWJsZWAgdHlwZXMgc3VjaCBhcyBgQXJyYXlgcy5cbiAqL1xuZXhwb3J0IGNvbnN0IGl0ZXJhYmxlRGlmZjogSXRlcmFibGVEaWZmZXJGYWN0b3J5W10gPVxuICAgIENPTlNUX0VYUFIoW0NPTlNUX0VYUFIobmV3IERlZmF1bHRJdGVyYWJsZURpZmZlckZhY3RvcnkoKSldKTtcblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRJdGVyYWJsZURpZmZlcnMgPSBDT05TVF9FWFBSKG5ldyBJdGVyYWJsZURpZmZlcnMoaXRlcmFibGVEaWZmKSk7XG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0S2V5VmFsdWVEaWZmZXJzID0gQ09OU1RfRVhQUihuZXcgS2V5VmFsdWVEaWZmZXJzKGtleVZhbERpZmYpKTtcbiJdfQ==