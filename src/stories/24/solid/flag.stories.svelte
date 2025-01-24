<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import FlagSvelte from '../../../lib/24/solid/flag.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: FlagSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="Flag" />
