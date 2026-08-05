<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import TrophySvelte from '../../../lib/24/outline/trophy.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: TrophySvelte,
		args: { class: '' },
	})
</script>

<Story name="Trophy" />
