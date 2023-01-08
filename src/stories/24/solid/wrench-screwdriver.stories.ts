import type { Meta, StoryObj } from '@storybook/svelte'
import { WrenchScrewdriver as WrenchScrewdriverSvelte } from '../../../lib/heroicons/24/solid'

const meta = {
	title: 'Solid',
	component: WrenchScrewdriverSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<WrenchScrewdriverSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const WrenchScrewdriver: Story = {}
