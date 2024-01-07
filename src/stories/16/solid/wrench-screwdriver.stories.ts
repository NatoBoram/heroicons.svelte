import type { Meta, StoryObj } from '@storybook/svelte'
import WrenchScrewdriverSvelte from '../../../lib/16/solid/wrench-screwdriver.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: WrenchScrewdriverSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<WrenchScrewdriverSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const WrenchScrewdriver: Story = {}
