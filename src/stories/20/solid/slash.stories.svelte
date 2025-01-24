<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import SlashSvelte from '../../../lib/20/solid/slash.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: SlashSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="Slash" />
