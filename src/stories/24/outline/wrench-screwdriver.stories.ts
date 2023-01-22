import type { Meta, StoryObj } from '@storybook/svelte'
import WrenchScrewdriverSvelte from '../../../lib/24/outline/wrench-screwdriver.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: WrenchScrewdriverSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<WrenchScrewdriverSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const WrenchScrewdriver: Story = {}
