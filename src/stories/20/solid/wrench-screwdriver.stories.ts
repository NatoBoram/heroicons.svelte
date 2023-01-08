import type { Meta, StoryObj } from '@storybook/svelte'
import { WrenchScrewdriver as WrenchScrewdriverSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Mini',
	component: WrenchScrewdriverSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<WrenchScrewdriverSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const WrenchScrewdriver: Story = {}
