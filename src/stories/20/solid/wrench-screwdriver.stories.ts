import type { Meta, StoryObj } from '@storybook/svelte'
import WrenchScrewdriverSvelte from '../../../lib/20/solid/wrench-screwdriver.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: WrenchScrewdriverSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<WrenchScrewdriverSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const WrenchScrewdriver: Story = {}
