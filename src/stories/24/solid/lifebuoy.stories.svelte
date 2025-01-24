<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import LifebuoySvelte from '../../../lib/24/solid/lifebuoy.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: LifebuoySvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="Lifebuoy" />
