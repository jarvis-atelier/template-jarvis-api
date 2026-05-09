import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let controller: AppController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    controller = module.get<AppController>(AppController);
  });

  describe('health', () => {
    it('returns status ok', () => {
      const result = controller.health();
      expect(result.status).toBe('ok');
    });

    it('returns a numeric uptime', () => {
      const result = controller.health();
      expect(typeof result.uptime).toBe('number');
      expect(result.uptime).toBeGreaterThanOrEqual(0);
    });

    it('returns an ISO timestamp', () => {
      const result = controller.health();
      expect(() => new Date(result.timestamp).toISOString()).not.toThrow();
    });
  });
});
