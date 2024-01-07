import type { Meta, StoryObj } from '@storybook/svelte'
import LanguageSvelte from '../../../lib/16/solid/language.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: LanguageSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<LanguageSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Language: Story = {}
