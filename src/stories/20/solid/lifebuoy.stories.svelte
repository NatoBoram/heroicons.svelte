<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import LifebuoySvelte from '../../../lib/20/solid/lifebuoy.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: LifebuoySvelte,
		args: { class: '' },
	})
</script>

<Story name="Lifebuoy" />
