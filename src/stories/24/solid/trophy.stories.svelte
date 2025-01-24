<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import TrophySvelte from '../../../lib/24/solid/trophy.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: TrophySvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="Trophy" />
